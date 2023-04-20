import { prisma } from "../../config/database";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";
async function findByEmail(email: string, select?: Prisma.UserSelect) {
  const params: Prisma.UserFindUniqueArgs = {
    where: {
      email,
    },
  };

  if (select) {
    params.select = select;
  }
  return prisma.user.findUnique(params);
}

async function create(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}

async function findbyName( name: string) {
  return prisma.user.findFirst({
    where: {
      name
    }
  })
}

const userRepository = {
  findByEmail,
  create,
  findbyName
};

export default userRepository;
