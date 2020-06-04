import { AppProps } from "next/app";
import Layout from "../src/components/Layout/Layout";
import { GlobalStyles } from "../src/theme/globalStyles";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  const { meta, showLayout } = pageProps;

  return (
    <Layout showLayout={showLayout || false}>
      <Head>
        <title>{meta?.title || "Donkey"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
