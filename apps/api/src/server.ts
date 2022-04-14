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

type Allowed = boolean | (string | RegExp)[];
let origin: Allowed = true;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  origin = true;
} else {
  origin = [
    "https://chiara-website-tik-stock.vercel.app/",
    "https://chiara-website.vercel.app/",
    "https://chiara-website.vercel.app",
    "https://studio.apollographql.com",
    /^(https:\/\/|http:\/\/)(chiara-website-)/,
    /^(https:\/\/|http:\/\/)(chiara-website-git-)/,
  ];
}

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
      origin: origin,
      credentials: true,
    },
  });
  await new Promise<void>((resolve) => {
    httpServer.listen({ port: 4000 }, resolve);
    console.info("🚀 Server ready at http://localhost:4000");
  });
};
