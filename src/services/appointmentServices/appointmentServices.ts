import appointmentRepository from "../../repositories/appointment-repository/index"
import { conflictError } from "../../errors/conflict-error";
import dayjs from "dayjs";
import { PastdataError } from "../../errors/pastdata-error";
import { unauthorizedError } from "../../errors/unauthorized-error";
import { notFoundError } from "../../errors/not-found-error";
import userRepository from "../../repositories/user-repository";

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

async function postAsAdmin( id: number, userName: string){
    let user = await userRepository.findbyName(userName);
    if(!user){
        user = await userRepository.create({
            name: userName,
            telNumber: "33999999999",
            email: `${userName.replace(/\s/g, '')}@salaocarlos.com`,
            password: `${userName.replace(/\s/g, '')}12345`,

        })
    }
    const newAppointment = await postAppointment(id, user.id);
    return newAppointment;


}

async function removeAppointment(id: number, userId: number){
    const appointment = await appointmentRepository.findAppointmentById(id);
    if(!appointment) throw notFoundError();
    if(appointment.userId != userId && userId != 1) throw unauthorizedError();
    
    const removedAppointment = await appointmentRepository.postAppointment(id, null);
}

async function getByParams(dateInit: Date | null, dateEnd: Date| null, shift: number | null, weekdays: string[] | null, Barber: string | null){
    
    
        const appointments = await appointmentRepository.findAppointmentsByParams(dateInit, dateEnd, shift, weekdays, Barber)
        console.log(dayjs(appointments[0].Day).format('dd'))
        return appointments;
    
}

const appointmentServices = {
    getAppointments,
    postAppointment,
    removeAppointment,
    getByParams,
    postAsAdmin
}

export default appointmentServices;