import { AppProps } from "next/app";
import Layout from "../src/components/Layout/Layout";
import { GlobalStyles } from "../src/theme/globalStyles";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  const { meta } = pageProps;

  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
