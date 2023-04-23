import { prisma } from "../../config/database";
import { Prisma, User } from "@prisma/client";
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

async function findbyId( id: number) {
  return prisma.user.findFirst({
    where: {
      id
    }
  })
}

async function updateProfile( userId: number, data: object){
  return prisma. user.update({
    where: {
      id: userId
    },
    data
  })
}



const userRepository = {
  findByEmail,
  create,
  findbyName,
  findbyId,
  updateProfile
};

export default userRepository;
