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
  },
  Mutation: {
    storeUserInformation: (_, { storeUserInput }) => {
      return {
        status: {
          success: true,
          message: "Successfully stored user information",
        },
        user: {
          id: "asdasdasad",
          userName: storeUserInput.userName,
          email: storeUserInput.email,
          password: storeUserInput.password,
        },
      };
    },
  },
};
