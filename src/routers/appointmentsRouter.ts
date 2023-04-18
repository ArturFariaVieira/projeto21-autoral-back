import { Router } from "express";
import { getAppointments, PostAppointment, removeAppointment } from "../controllers/appointmentsController"
import { authenticateToken } from "../middlewares/authentication-middleware";

const appointmentsRouter = Router();

appointmentsRouter.all("/*", authenticateToken)
appointmentsRouter.get("/appointments",  getAppointments);
appointmentsRouter.post("/appointments", PostAppointment);
appointmentsRouter.post("/appointments/:id", removeAppointment);


export { appointmentsRouter };
