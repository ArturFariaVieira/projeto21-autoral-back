import * as jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import { createUser } from "../factories/users-factory";
import { createSession } from "../factories/sessions-factory";
import { prisma } from "../../src/config/database";

export async function cleanDb() {
  await prisma.session.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.appointments.updateMany({
    data: {
      userId : null
    }
  })
}

export async function generateValidToken(user?: User) {
  const incomingUser = user || (await createUser());
  const token = jwt.sign({ userId: incomingUser.id }, process.env.JWT_SECRET);

  await createSession(token);

  return token;
}
