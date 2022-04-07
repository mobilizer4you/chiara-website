import { GraphQLClient } from "graphql-request";

let endPoint = "https://tikstock.onrender.com/graphql";

if (process.env.NODE_ENV === "development") {
  endPoint = "http://localhost:4000/graphql";
}

interface LoadOptions {
  idToken?: string;
}

export const loadClient = ({ idToken }: LoadOptions) => {
  return new GraphQLClient(endPoint, {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  });
};

export const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  FORGOT_PASSWORD: "/forgot-password",
  ABOUT: "/about",
  FEATURES: "/features",
  HELP: "/help",
  PRICING: "/pricing",
} as const;
