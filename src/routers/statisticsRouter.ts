import { Router } from "express";
import { getByParams } from "../controllers/statisticsController";
import { authenticateToken } from "../middlewares/authentication-middleware";

const statisticsRouter = Router();

statisticsRouter.all("/*", authenticateToken)
statisticsRouter.get("/statistics", getByParams);


export { statisticsRouter };