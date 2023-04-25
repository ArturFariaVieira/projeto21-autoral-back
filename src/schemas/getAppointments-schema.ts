import Joi from "joi";

export const getAppointmentsSchema = Joi.object(
    {
        Barber: Joi.string().valid("Carlim", "Baixim").required()
    }
)

export const postAppointmentSchema = Joi.object(
    {
        id: Joi.number().required().min(1),
        userName: Joi.string().min(4)
    }
)

export const removeAppointmentSchema = Joi.object(
    {
        id: Joi.number().required().min(1)
    }
)