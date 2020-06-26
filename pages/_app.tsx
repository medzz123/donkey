import 'react-toastify/dist/ReactToastify.css';

import { ApolloProvider } from '@apollo/react-hooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@theme/mui';
import withData, { parseCookies } from '@utils/apollo-client';
import NextApp from 'next/app';
import Head from 'next/head';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import Layout from '../src/components/Layout/Layout';

const App = ({ Component, pageProps, apollo, router }) => {
  const { title = 'Donkey', showLayout = false } = pageProps;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>{title} - Donkey</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Your friendly donkey app!" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout
          showLayout={showLayout}
          currentRoute={router.route}
          title={title}
        >
          <ToastContainer
            // @ts-ignore
            position={toast.POSITION.BOTTOM_RIGHT}
          />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
};

App.getInitialProps = async (appContext) => {
  console.log('Pathname', appContext.ctx.pathname);
  const cookies = parseCookies(appContext.ctx);
  console.log('Cookies', cookies);
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};

export default withData(App);
