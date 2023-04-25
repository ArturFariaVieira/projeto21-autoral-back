import appointmentRepository from "../../repositories/appointment-repository/index"
import { conflictError } from "../../errors/conflict-error";
import dayjs from "dayjs";
import { PastdataError } from "../../errors/pastdata-error";
import { unauthorizedError } from "../../errors/unauthorized-error";
import { notFoundError } from "../../errors/not-found-error";
import userRepository from "../../repositories/user-repository";
import { tooManyAppointmentsError } from "../../errors/toomanyAppointments-error";

async function getAppointments (Barber : string){


    const appointments = await appointmentRepository.getAppointments(Barber);

    return appointments;

}

async function postAppointment(  id: number, userId: number) {
    const appointment = await appointmentRepository.findAppointmentById(id);
    const now = new Date(dayjs().locale('pt-br').format('YYYY-MM-DD HH:mm:ss'))
    if(appointment.userId) {
        throw conflictError("Horário já agendado")
    }
    if(appointment.Day < now ) {
        throw PastdataError('Não é possível agendar em uma data passada');
    }
    const userAppointments = await appointmentRepository.findbyDateandUser( appointment.Day, userId);
    if(userAppointments.length> 0) throw tooManyAppointmentsError()

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
    if(!appointment) {
        throw notFoundError();
        }
    if(appointment.userId != userId && userId != 1) throw unauthorizedError();
    if(appointment && !(appointment.userId != userId && userId != 1)){
        const removedAppointment = await appointmentRepository.postAppointment(id, null);
        console.log (removedAppointment)
        return removedAppointment;
    }
    

}

async function getByParams(dateInit: Date | null, dateEnd: Date| null, shift: number | null, weekdays: string[] | null, Barber: string | null){
    
    
        const appointments = await appointmentRepository.findAppointmentsByParams(dateInit, dateEnd, shift, weekdays, Barber)
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