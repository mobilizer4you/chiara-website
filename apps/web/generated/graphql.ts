import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import {
  useQuery,
  UseQueryOptions,
  useMutation,
  UseMutationOptions,
} from "react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  headers?: RequestInit["headers"]
) {
  return async (): Promise<TData> =>
    client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: "Account";
  access_token?: Maybe<Scalars["String"]>;
  expires_at?: Maybe<Scalars["Int"]>;
  id: Scalars["String"];
  id_token?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  providerAccountId: Scalars["String"];
  refresh_token?: Maybe<Scalars["String"]>;
  scope?: Maybe<Scalars["String"]>;
  session_state?: Maybe<Scalars["String"]>;
  token_type?: Maybe<Scalars["String"]>;
  type: Scalars["String"];
  user?: Maybe<User>;
  userId: Scalars["String"];
};

export type Book = {
  __typename?: "Book";
  author?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  login: LoginResponse;
};

export type MutationLoginArgs = {
  loginRequest: LoginRequest;
};

export type MutationResponse = {
  __typename?: "MutationResponse";
  message: Scalars["String"];
  success: Scalars["Boolean"];
};

export type Query = {
  __typename?: "Query";
  books?: Maybe<Array<Maybe<Book>>>;
};

export type Session = {
  __typename?: "Session";
  expires: Scalars["String"];
  id: Scalars["String"];
  sessionToken: Scalars["String"];
  user: User;
  userId: Scalars["String"];
};

export type User = {
  __typename?: "User";
  accounts?: Maybe<Array<Maybe<Account>>>;
  email?: Maybe<Scalars["String"]>;
  emailVerified?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  sessions?: Maybe<Array<Maybe<Session>>>;
};

export type LoginRequest = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LoginResponse = {
  __typename?: "loginResponse";
  status: MutationResponse;
  token: Scalars["String"];
  user?: Maybe<User>;
};

export type GetBooksQueryQueryVariables = Exact<{ [key: string]: never }>;

export type GetBooksQueryQuery = {
  __typename?: "Query";
  books?: Array<{
    __typename?: "Book";
    title?: string | null;
    author?: string | null;
  } | null> | null;
};

export type LoginMutationVariables = Exact<{
  input: LoginRequest;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "loginResponse";
    token: string;
    status: {
      __typename?: "MutationResponse";
      success: boolean;
      message: string;
    };
    user?: {
      __typename?: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      emailVerified?: string | null;
      image?: string | null;
    } | null;
  };
};

export const GetBooksQueryDocument = `
    query getBooksQuery {
  books {
    title
    author
  }
}
    `;
export const useGetBooksQueryQuery = <
  TData = GetBooksQueryQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables?: GetBooksQueryQueryVariables,
  options?: UseQueryOptions<GetBooksQueryQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetBooksQueryQuery, TError, TData>(
    variables === undefined ? ["getBooksQuery"] : ["getBooksQuery", variables],
    fetcher<GetBooksQueryQuery, GetBooksQueryQueryVariables>(
      client,
      GetBooksQueryDocument,
      variables,
      headers
    ),
    options
  );

useGetBooksQueryQuery.getKey = (variables?: GetBooksQueryQueryVariables) =>
  variables === undefined ? ["getBooksQuery"] : ["getBooksQuery", variables];
export const LoginDocument = `
    mutation login($input: loginRequest!) {
  login(loginRequest: $input) {
    status {
      success
      message
    }
    token
    user {
      id
      name
      email
      emailVerified
      image
    }
  }
}
    `;
export const useLoginMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    LoginMutation,
    TError,
    LoginMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
    ["login"],
    (variables?: LoginMutationVariables) =>
      fetcher<LoginMutation, LoginMutationVariables>(
        client,
        LoginDocument,
        variables,
        headers
      )(),
    options
  );
useLoginMutation.getKey = () => ["login"];
