import express, { Express } from "express";
import cors from "cors";

import { loadEnv } from "./config/envs";
import { connectDb, disconnectDB } from "./config/database";
import { authenticationRouter } from "./routers/authRouter";
import { usersRouter } from "./routers/users-router";

loadEnv();

/*import {
  
} from "/routers";*/

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use(authenticationRouter)
  .use(usersRouter)
  

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;