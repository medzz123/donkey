import Layout from "../src/components/Layout/Layout";
import { GlobalStyles } from "@theme/globalStyles";
import Head from "next/head";

import { ApolloProvider } from "@apollo/react-hooks";

import withData from "@utils/apollo-client";

const App = ({ Component, pageProps, apollo }) => {
  const { meta, showLayout } = pageProps;

  return (
    <ApolloProvider client={apollo}>
      <Layout showLayout={showLayout || false}>
        <Head>
          <title>{meta?.title || "Donkey"}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default withData(App);
