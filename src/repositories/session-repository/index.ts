import { prisma } from "../../config/database";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.SessionUncheckedCreateInput) {
  return prisma.session.create({
    data,
  });
}

async function deleteSession (id:number){
  return prisma.session.delete({
    where: {
      id
    }
  })
}

async function findLast(userId: number){
  return prisma.session.findMany({
    where: {
      userId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
}

const sessionRepository = {
  create,
  deleteSession,
  findLast
};

export default sessionRepository;
