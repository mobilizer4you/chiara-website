import { MutationLoginArgs, Resolvers } from "./../../generated/resolversTypes";
import { PrismaClient } from "@prisma/client";
import { login } from "../auth/auth";
import { ApolloError } from "apollo-server-express";
const prisma = new PrismaClient();
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

export const resolvers: Resolvers = {
  Query: {
    books: () => {
      return books;
    },
  },
  Mutation: {
    login: async (_parent, args: MutationLoginArgs) => {
      try {
        const {
          loginRequest: { email, password },
        } = args;
        const response = await login({ email, password });
        return response;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
};
