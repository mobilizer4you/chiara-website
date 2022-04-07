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
  APP: {
    SEARCH: "/app/search",
    BUZZ_PORTAL: "/app/buzz-portal",
    ECONOMIC_INSIGHT: "/app/economic-insight",
    FUNDAMENTAL_PORTAL: "/app/fundamental-portal",
    NEWSLETTER: "/app/newsletter",
    STRATEGY_DESIGNER: "/app/strategy-designer",
    TECH_PREP: "/app/tech-prep",
    USER: {
      ACCOUNT: "/app/user/account",
    },
  },
} as const;
