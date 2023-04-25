import Joi from "joi";

export const updateProfileSchema = Joi.object({
  name: Joi.string().required(),
  telNumber: Joi.string().regex(/^\d+$/).required().length(11),
  email: Joi.string().email().required(),
  password: Joi.string().min(6),
  newPassword: Joi.string().min(6)
});


