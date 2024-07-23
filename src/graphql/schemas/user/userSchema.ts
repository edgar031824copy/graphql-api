import { gql } from "apollo-server-express";

// Define the GraphQL schema
export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String
    email: String!
    books: [Book]
  }

  input UserInput {
    name: String
    email: String!
  }

  type Query {
    user(email: String!): User
    users: [User]!
  }

  type Mutation {
    createUser(input: UserInput!): ID!
  }
`;
