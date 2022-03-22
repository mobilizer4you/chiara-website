import { GraphQLClient } from "graphql-request";

interface LoadOptions {
  endPoint: string;
  idToken?: string;
}

export const loadClient = ({ endPoint, idToken }: LoadOptions) => {
  return new GraphQLClient(endPoint, {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  });
};
