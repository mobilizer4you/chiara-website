import { ApolloError } from "apollo-server-core";
import { getUserInformation, storeUserInformation } from "../auth/auth";
import { Resolvers } from "../generated/resolversTypes";

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
    getUserInformation: async (_, { userId }) => {
      try {
        const data = getUserInformation(userId);
        return data;
      } catch (error) {
        console.error(error);
        throw new ApolloError(error as any);
      }
    },
  },
  Mutation: {
    storeUserInformation: async (_, { storeUserInput }) => {
      try {
        const data = await storeUserInformation(storeUserInput);
        return data;
      } catch (error) {
        console.error(error);
        throw new ApolloError(error as any);
      }
    },
  },
};
