import { AuthenticatedRequest } from "middlewares/authentication-middleware";
import { Response } from "express";
import appointmentServices from "../services/appointmentServices/appointmentServices";
import httpStatus from "http-status";

export async function getByParams (req: AuthenticatedRequest, res: Response){
    const { userId } = req;
    const { dateInit, dateEnd, shift, weekdays, Barber } = req.body;
    try{
        if (userId != 1) {
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }
        const data = await appointmentServices.getByParams(dateInit, dateEnd, shift, weekdays, Barber)
        console.log(data.length)
        return res.send(data)
    }
     catch (error) {
        console.log(error)
    }
}
    