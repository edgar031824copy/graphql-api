import { User } from "../types";
import { users, books } from "./data";
import { v4 as uuidV4 } from "uuid";

export class UserModel {
  static getUsers() {
    return users.map((user) => {
      return {
        ...user,
        books: user?.books?.map((book) =>
          books.find((item) => item.id === book)
        ),
      };
    });
  }

  static getUser(email: string) {
    const user = users.find((item) => item.email === email);

    return {
      ...user,
      books: user?.books?.map((book) => books.find((item) => item.id === book)),
    };
  }

  static createUser(user: User) {
    const newRecord = {
      id: uuidV4(),
      name: user.name,
      email: user.email,
      books: [],
    };

    users.push(newRecord);

    return newRecord.id;
  }
}
