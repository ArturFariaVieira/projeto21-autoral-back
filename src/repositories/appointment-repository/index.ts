import { DateSchema } from "joi";
import { prisma } from "../../config/database";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";


async function getAppointments(Barber : string) {
  return await prisma.appointments.findMany({
    where : {
        Barber,
        Day: {
            gte: new Date(dayjs().locale('pt-br').format('YYYY-MM-DD')),
            lte: new Date(dayjs().locale('pt-br').add(20, 'day' ).format('YYYY-MM-DD')),
            
        }
    }, 
    orderBy: {
        id : 'asc'
    }
  });
}

async function findAppointmentById(id : number){

    return await prisma.appointments.findFirst({
        where: {
            id
        }
    })

}

async function postAppointment( id: number, userId : number) {
    console.log(userId);
    return await prisma.appointments.update({
        where : {
            id,
        },
        data: {
            userId
        }
    })
}

const appointmentRepository = {
    getAppointments,
    findAppointmentById,
    postAppointment
};

export default appointmentRepository;