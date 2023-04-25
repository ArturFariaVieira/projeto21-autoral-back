import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Response } from "express";
import accountServices from "../services/accountServices";
import httpStatus from "http-status";

export async function getMyappointments(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
  
    try { 
     
      const appointments = await accountServices.getMyappointments(userId);
      return res.send(appointments)
  
    } catch (error) {
      if(error.name == "UnauthorizedError"){
        return res.status(401).send(error.message)
      }
    }
  }

export async function updateProfile(req: AuthenticatedRequest, res : Response) {

    const { userId } = req; 
    const { name, telNumber, email, password, newPassword } = req.body;


    try {
        const user = await accountServices.updateProfile(userId, name, telNumber, email, password, newPassword );
        return res.sendStatus(httpStatus.OK)
    } 
    catch(error) {
        console.log(error);
        if(error.message == "InvalidCredentialsError"){
            return res.sendStatus(httpStatus.IM_A_TEAPOT)

        }
        return res.status(401).send("Provided password does not match with the account's")
    }

}

export async function logOut(req: AuthenticatedRequest, res: Response) {
    const { userId, token } = req; 

    try {
        const logout = await accountServices.logOut(userId, token);
        return res.sendStatus(httpStatus.OK)
    }
    catch (error) {
        return res.status(404).send("Você não está logado")
    }

}