import { UserController } from "../../../controllers";
import { UserModel } from "../../../models/database";
//import { UserModel } from "../../../models/local-data";

/* The controller receives an instance of the model. In this case, it could use either local data or a PostgreSQL database.
Regardless of which one is used, the controller is agnostic and works because both models adhere to the same contract.
This applies the dependency injection principle */
const userController = new UserController({ userModel: UserModel });

// Define the resolvers
export const userResolvers = {
  Query: {
    user: (_: any, { email }: { email: string }) =>
      userController.getUser(email),
    users: userController.getAllUsers,
  },

  Mutation: {
    createUser: (_: any, input: any) => {
      const {
        input: { name, email },
      } = input;

      return userController.addUser({ name, email });
    },
  },
};
