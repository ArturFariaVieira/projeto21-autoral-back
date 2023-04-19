import { DateSchema, any } from "joi";
import { prisma } from "../../config/database";
import { Appointments, Prisma } from "@prisma/client";
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

async function findAppointmentsByParams( dateInit: Date, dateEnd: Date, shift : number, weekdays: string[], Barber: string | null){
    let params;
    let oneOrBoth = Barber;
    let Time;

    let params2 = {    }


    
    if(Barber !== ''){
        params2["Barber"] = Barber ;
    }
    if(shift){
        if (shift == 1 ) {
            params = {lte: 1130}
        } 
        else {  
            params = { gte: 1400}
        }
        params2["Time"] = params
    }
    if(dateInit){
        params2["Day"] = {
            gte: new Date (dayjs(dateInit).locale('pt-br').format('YYYY-MM-DD')),
            lte: new Date (dayjs(dateEnd).locale('pt-br').format('YYYY-MM-DD')),
        }
    }
    params2["NOT"] = [{
        userId: null
    }]
    console.log(params2)
   
    return await prisma.appointments.findMany({
        where : 
            params2
        
        
            
    })
}

async function postAppointment( id: number, userId : number | null) {
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
    postAppointment,
    findAppointmentsByParams
};

export default appointmentRepository;
