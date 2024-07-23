import { getBooks } from "../../../controllers";

// Define the resolvers
export const bookResolvers = {
  Query: {
    books: getBooks,
  },
};
