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

  type Account {
    id: String!
    userId: String!
    type: String!
    provider: String!
    providerAccountId: String!
    refresh_token: String
    access_token: String
    expires_at: Int
    token_type: String
    scope: String
    id_token: String
    session_state: String
    user: User
  }

  type User {
    id: String!
    name: String
    email: String
    emailVerified: String
    image: String
    accounts: [Account]
    sessions: [Session]
  }

  type Session {
    id: String!
    sessionToken: String!
    userId: String!
    expires: String!
    user: User!
  }

  type MutationResponse {
    success: Boolean!
    message: String!
  }

  type loginResponse {
    status: MutationResponse!
    user: User
    token: String!
  }

  input loginRequest {
    email: String!
    password: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }

  type Mutation {
    login(loginRequest: loginRequest!): loginResponse!
  }
`;
