import { Request, Response } from "express";
import httpStatus from "http-status";
import appointmentServices from "../services/appointmentServices/appointmentServices";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware"

export async function getAppointments(req: AuthenticatedRequest, res: Response) {
  const { Barber } = req.body;

  try {
    const appointments = await appointmentServices.getAppointments(Barber);
    return res.send(appointments)
  } catch (error) {

    
  }
}
export async function PostAppointment(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { id, userName } = req.body;

  try {
    if (userName && userId == 1) {
      const newAppointment = await appointmentServices.postAsAdmin(id , userName);
      return res.status(httpStatus.OK).send(newAppointment);
    }
    const newAppointment = await appointmentServices.postAppointment(id, userId);
    return res.status(httpStatus.OK).send(newAppointment);
  } catch (error) {
    console.log(error)
    if(error.name == "ConflictError") return res.status(409).send(error.message);
    if(error.name == "Invalid data Error") return res.status(400).send(error.message)
    if(error.name == "tooManyAppointmentsError") return res.status(400).send(error.message)

  }
}

export async function removeAppointment(req: AuthenticatedRequest, res: Response) {

  const { id } = req.params;
  const { userId } = req;
  console.log(req.params)
  try {
    const appointment = await appointmentServices.removeAppointment(Number(id), userId);
    return res.sendStatus(httpStatus.OK);

  } catch (error) {
    if(error.name == "UnauthorizedError"){
      return res.status(httpStatus.UNAUTHORIZED).send("Somente o ADMIN ou o dono do agendamento pode desmarcar!")
    }
    if(error.name == "NotFoundError"){
      return res.status(httpStatus.NOT_FOUND).send("noti faund mané")
    }
    
  }




}
