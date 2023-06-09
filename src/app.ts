import express, { Express } from "express";
import cors from "cors";

import { loadEnv } from "./config/envs";
import { connectDb, disconnectDB } from "./config/database";
import { authenticationRouter } from "./routers/authRouter";
import { usersRouter } from "./routers/users-router";
import { appointmentsRouter } from "./routers/appointmentsRouter";
import { statisticsRouter } from "./routers/statisticsRouter";
import { accountRouter } from "./routers/accountRouter";

loadEnv();


const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use(authenticationRouter)
  .use(usersRouter)
  .use(appointmentsRouter)
  .use(statisticsRouter)
  .use(accountRouter)
  

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;