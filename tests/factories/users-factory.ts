import bcrypt from "bcrypt";
import faker from "@faker-js/faker";
import { User } from "@prisma/client";
import { prisma } from "../../src/config/database";

export async function createUser(params: Partial<User> = {}): Promise<User> {
  const incomingPassword = params.password || faker.internet.password(6);
  const hashedPassword = await bcrypt.hash(incomingPassword, 10);

  return prisma.user.create({
    data: {
      name: faker.name.findName(),
      telNumber: faker.phone.phoneNumber("##9########"),
      email: params.email || faker.internet.email(),
      password: hashedPassword,
    },
  });
}
