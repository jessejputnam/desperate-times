import type { AppProps } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";

import Page from "@/components/Page";

import "../components/styles/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps}></Component>
    </Page>
  );
}
