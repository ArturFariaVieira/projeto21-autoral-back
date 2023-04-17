import { Router } from "express";
import { getAppointments, PostAppointment } from "../controllers/appointmentsController"
import { authenticateToken } from "../middlewares/authentication-middleware";

const appointmentsRouter = Router();

appointmentsRouter.all("/*", authenticateToken)
appointmentsRouter.get("/appointments",  getAppointments);
appointmentsRouter.post("/appointments", PostAppointment)

export { appointmentsRouter };
