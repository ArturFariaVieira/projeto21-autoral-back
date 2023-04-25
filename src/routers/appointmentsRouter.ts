import { Router } from "express";
import { getAppointments, PostAppointment, removeAppointment } from "../controllers/appointmentsController"
import { authenticateToken } from "../middlewares/authentication-middleware";
import { validateBody, validateParams } from "../middlewares/validation-middleware";
import { getAppointmentsSchema, postAppointmentSchema, removeAppointmentSchema } from "../schemas/getAppointments-schema";

const appointmentsRouter = Router();

appointmentsRouter.all("/*", authenticateToken)
appointmentsRouter.get("/appointments", validateBody(getAppointmentsSchema),  getAppointments);
appointmentsRouter.post("/appointments", validateBody(postAppointmentSchema), PostAppointment);
appointmentsRouter.post("/appointments/:id", validateParams(removeAppointmentSchema), removeAppointment);


export { appointmentsRouter };
