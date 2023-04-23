import userService from "../services/users-service";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";

export async function usersPost(req: Request, res: Response) {
  const {name, telNumber,  email, password } = req.body;
  

  try {
    const user = await userService.createUser({name, telNumber, email, password });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    if (error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    console.log(error)
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

