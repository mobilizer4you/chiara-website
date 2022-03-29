import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import NProgress from "nprogress";
import Router from "next/router";
import { ReactQueryDevtools } from "react-query/devtools";
import initAuth from "../utils/intiAuth";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";
import "../styles/css-animation.scss";
import { NextPage } from "next";
import { AppProps } from "next/app";
import "../styles/nprogress.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

initAuth();

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {getLayout(<Component {...pageProps} />)}
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
