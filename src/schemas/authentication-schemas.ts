import { SignInParams } from "../services/authServices/authServices";
import Joi from "joi";

export const signInSchema = Joi.object<SignInParams>({
  
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
