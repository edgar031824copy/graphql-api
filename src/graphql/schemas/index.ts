import { mergeTypeDefs } from "@graphql-tools/merge";
import { bookTypeDefs } from "./book";
import { userTypeDefs } from "./user";

export const typeDefs = mergeTypeDefs([userTypeDefs, bookTypeDefs]);
