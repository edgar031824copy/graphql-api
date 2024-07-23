import { gql } from "apollo-server-express";

// Define the GraphQL schema
export const bookTypeDefs = gql`
  type Book {
    id: ID!
    name: String!
    category: String!
    published: Boolean!
    authorId: ID!
    author: User!
  }
  type Query {
    books: [Book]!
  }
`;
