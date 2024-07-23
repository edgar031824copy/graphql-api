import { PrismaClient } from "@prisma/client";

export class BookModel {
  static async getBooks() {
    const prisma = new PrismaClient();

    return await prisma.book.findMany({
      include: {
        author: true,
      },
    });
  }
}
