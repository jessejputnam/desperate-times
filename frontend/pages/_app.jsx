import NProgress from "nprogress";
import Router from "next/router";
import { ApolloProvider } from "@apollo/client";
import withData from "../lib/withData";

import Page from "@/components/Page";

import "../components/styles/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// @ts-ignore
function App({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps}></Component>
      </Page>
    </ApolloProvider>
  );
}

// Tell NextJS to fetch the queries in the children components
//@ts-ignore
App.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(App);
