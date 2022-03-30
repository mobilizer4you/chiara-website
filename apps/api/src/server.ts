import { json, urlencoded } from "body-parser";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import http from "http";
import { resolvers } from "./graphql/resolver";
import { typeDefs } from "./graphql/typedef";

export const startApolloServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({
    app,
    cors: {
      origin: "*",
      credentials: true,
    },
  });
  await new Promise<void>((resolve) => {
    httpServer.listen({ port: 4000 }, resolve);
    console.info("🚀 Server ready at http://localhost:4000");
  });
};
