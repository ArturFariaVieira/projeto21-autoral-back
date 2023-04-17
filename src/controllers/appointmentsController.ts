import { Request, Response } from "express";
import httpStatus from "http-status";
import appointmentServices from "../services/appointmentServices/appointmentServices";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware"

export async function getAppointments(req: AuthenticatedRequest, res: Response) {
  const {Barber} = req.body;  

  try {
    const appointments = await appointmentServices.getAppointments(Barber);
    return res.send(appointments)
  } catch (error) {
    
    console.log(error)
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
export async function PostAppointment(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const { id } = req.body;

    try {
    const newAppointment = await appointmentServices.postAppointment(id, userId);
    return res.status(httpStatus.OK).send(newAppointment);
    }  catch (error) {
    
        console.log(error)
        return res.status(httpStatus.BAD_REQUEST).send(error);
      }
}
