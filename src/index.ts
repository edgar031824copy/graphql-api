import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import { typeDefs, resolvers } from "./graphql";

// Configure dotenv to read .env file
dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!!!");
});

const apolloServer = new ApolloServer({ typeDefs, resolvers });

apolloServer.start().then(() => {
  // Apply the Apollo GraphQL middleware and set the path to /graphql
  apolloServer.applyMiddleware({ app: app as any, path: "/graphql" });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
