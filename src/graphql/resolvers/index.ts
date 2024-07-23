import { bookResolvers } from "./book";
import { userResolvers } from "./user";

// index.js

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...bookResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
};
