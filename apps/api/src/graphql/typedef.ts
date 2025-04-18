import { gql } from "apollo-server-express";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  type User {
    id: String!
    username: String!
    email: String!
    authProvider: AuthProvider!
  }

  enum AuthProvider {
    GOOGLE
    EMAIL
  }

  input StoreUserInput {
    id: String!
    username: String!
    email: String!
    authProvider: AuthProvider!
  }

  type MutationResponse {
    success: Boolean!
    message: String!
  }

  type StoreUserInformationResponse {
    status: MutationResponse!
    user: User!
  }

  type GetUserInformationResponse {
    status: MutationResponse!
    user: User
  }

  type Mutation {
    storeUserInformation(
      storeUserInput: StoreUserInput!
    ): StoreUserInformationResponse!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    getUserInformation(userId: String!): GetUserInformationResponse!
  }
`;
