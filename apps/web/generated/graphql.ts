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

export type Book = {
  __typename?: "Book";
  author?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type GetUserInformationResponse = {
  __typename?: "GetUserInformationResponse";
  status: MutationResponse;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: "Mutation";
  storeUserInformation: StoreUserInformationResponse;
};

export type MutationStoreUserInformationArgs = {
  storeUserInput: StoreUserInput;
};

export type MutationResponse = {
  __typename?: "MutationResponse";
  message: Scalars["String"];
  success: Scalars["Boolean"];
};

export type Query = {
  __typename?: "Query";
  books?: Maybe<Array<Maybe<Book>>>;
  getUserInformation: GetUserInformationResponse;
};

export type QueryGetUserInformationArgs = {
  userId: Scalars["String"];
};

export type StoreUserInformationResponse = {
  __typename?: "StoreUserInformationResponse";
  status: MutationResponse;
  user: User;
};

export type StoreUserInput = {
  email: Scalars["String"];
  id: Scalars["String"];
  username: Scalars["String"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  id: Scalars["String"];
  username: Scalars["String"];
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

export type GetUserInformationQueryVariables = Exact<{
  input: Scalars["String"];
}>;

export type GetUserInformationQuery = {
  __typename?: "Query";
  getUserInformation: {
    __typename?: "GetUserInformationResponse";
    status: {
      __typename?: "MutationResponse";
      message: string;
      success: boolean;
    };
    user?: {
      __typename?: "User";
      id: string;
      username: string;
      email: string;
    } | null;
  };
};

export type StoreUserInformationMutationVariables = Exact<{
  storeUserInput: StoreUserInput;
}>;

export type StoreUserInformationMutation = {
  __typename?: "Mutation";
  storeUserInformation: {
    __typename?: "StoreUserInformationResponse";
    status: {
      __typename?: "MutationResponse";
      success: boolean;
      message: string;
    };
    user: { __typename?: "User"; id: string; username: string; email: string };
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
export const GetUserInformationDocument = `
    query getUserInformation($input: String!) {
  getUserInformation(userId: $input) {
    status {
      message
      success
    }
    user {
      id
      username
      email
    }
  }
}
    `;
export const useGetUserInformationQuery = <
  TData = GetUserInformationQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables: GetUserInformationQueryVariables,
  options?: UseQueryOptions<GetUserInformationQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetUserInformationQuery, TError, TData>(
    ["getUserInformation", variables],
    fetcher<GetUserInformationQuery, GetUserInformationQueryVariables>(
      client,
      GetUserInformationDocument,
      variables,
      headers
    ),
    options
  );

useGetUserInformationQuery.getKey = (
  variables: GetUserInformationQueryVariables
) => ["getUserInformation", variables];
export const StoreUserInformationDocument = `
    mutation storeUserInformation($storeUserInput: StoreUserInput!) {
  storeUserInformation(storeUserInput: $storeUserInput) {
    status {
      success
      message
    }
    user {
      id
      username
      email
    }
  }
}
    `;
export const useStoreUserInformationMutation = <
  TError = unknown,
  TContext = unknown
>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    StoreUserInformationMutation,
    TError,
    StoreUserInformationMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<
    StoreUserInformationMutation,
    TError,
    StoreUserInformationMutationVariables,
    TContext
  >(
    ["storeUserInformation"],
    (variables?: StoreUserInformationMutationVariables) =>
      fetcher<
        StoreUserInformationMutation,
        StoreUserInformationMutationVariables
      >(client, StoreUserInformationDocument, variables, headers)(),
    options
  );
useStoreUserInformationMutation.getKey = () => ["storeUserInformation"];
