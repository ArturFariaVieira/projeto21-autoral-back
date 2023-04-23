import { Router } from "express";
import { getMyappointments, updateProfile, logOut } from "../controllers/accountController";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { updateProfileSchema } from "../schemas/updateProfile-schema";
import { validateBody } from "../middlewares/validation-middleware";


const accountRouter = Router();
accountRouter.all("/*", authenticateToken )
accountRouter.get("/myappointments", getMyappointments)
accountRouter.post("/profile", validateBody(updateProfileSchema), updateProfile)
accountRouter.post("/logout", logOut)

export { accountRouter };
