# GraphQl-API

This API has been developed with Express, Apollo Server, GraphQL, Prisma, and TypeScript. The goal is to create a dummy app that demonstrates how GraphQL works internally by creating schemas and resolvers. It also illustrates the MVC architecture and how we can use the dependency injection principle, where the controller receives an instance of the model. In this case, the model can use either local data or a PostgreSQL database. Regardless of which one is used, the controller is agnostic and works because both models adhere to the same contract.

After cloning the repository, you can run _npm run dev_, which will start a server on port 4000 by default. You can then access http://localhost:4000/graphql and interact with the Apollo GraphiQL UI, using the queries and mutations exposed.

You can use both models:

- **local-data**: Uses a hardcoded JSON

- **Database**: Uses a PostgreSQL database. To run the database, you can start your local server manually or use Docker to run a PostgreSQL container.
  You can then connect to your local database using PostgreSQL client tools like pgAdmin, DBeaver, DataGrip, Workbench, etc.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />

### `npm run dev`

Runs the app in locally mode with watch mode<br />
