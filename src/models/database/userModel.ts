import { PrismaClient } from "@prisma/client";
import { User } from "../types";
import { v4 as uuidV4 } from "uuid";

export class UserModel {
  static async getUsers() {
    const prisma = new PrismaClient();

    return await prisma.user.findMany({
      include: {
        Book: true,
      },
    });
  }

  static async getUser(email: string) {
    const prisma = new PrismaClient();

    return await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        Book: true,
      },
    });
  }

  static async createUser(user: User) {
    const prisma = new PrismaClient();

    const newUser = await prisma.user.create({
      data: {
        id: uuidV4(),
        email: user.email,
        name: user?.name,
      },
    });

    return newUser.id;
  }
}
