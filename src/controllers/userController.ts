import { User } from "../models/types";

export class UserController {
  userModel;

  constructor({ userModel }: { userModel: any }) {
    this.userModel = userModel;
  }

  getAllUsers = async () => {
    return this.userModel.getUsers();
  };

  getUser = async (email: string) => {
    return this.userModel.getUser(email);
  };

  addUser = async ({
    name,
    email,
  }: {
    name: User["name"];
    email: User["email"];
  }) => {
    return this.userModel.createUser({ name, email, id: "" });
  };
}
