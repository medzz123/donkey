import React from 'react';
import Layout from '../src/components/Layout/Layout';
import { GlobalStyles } from '@theme/globalStyles';
import Head from 'next/head';
import NextApp from 'next/app';

import { ApolloProvider } from '@apollo/react-hooks';

import withData from '@utils/apollo-client';

const App = ({ Component, pageProps, apollo }) => {
  const { meta, showLayout } = pageProps;

  return (
    <ApolloProvider client={apollo}>
      <Layout showLayout={showLayout || false}>
        <Head>
          <title>{meta?.title || 'Donkey'}</title>
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

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};

export default withData(App);
