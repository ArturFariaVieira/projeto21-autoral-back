import { exclude } from "../../utils/prisma-utils";
import { User } from "@prisma/client";
import appointmentRepository from "../../repositories/appointment-repository/index"
import { conflictError } from "../../errors/conflict-error";
import dayjs from "dayjs";
import { BAD_REQUEST } from "http-status";
import { PastdataError } from "../../errors/pastdata-error";

async function getAppointments (Barber : string){


    const appointments = await appointmentRepository.getAppointments(Barber);

    return appointments;

}

async function postAppointment(  id: number, userId: number) {
    const appointment = await appointmentRepository.findAppointmentById(id);
    const now = new Date(dayjs().locale('pt-br').format('YYYY-MM-DD'))
    if(appointment.userId) {
        throw conflictError("Horário já agendado")
    }
    if(appointment.Day < now ) {
        throw PastdataError('Não é possível agendar em uma data passada');
    }
    const newappointment = await appointmentRepository.postAppointment(id, userId);
    return newappointment;
}

const appointmentServices = {
    getAppointments,
    postAppointment,
}

export default appointmentServices;