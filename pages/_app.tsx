import 'react-toastify/dist/ReactToastify.css';

import { ApolloProvider } from '@apollo/react-hooks';
import { ME_QUERY } from '@domain/queries/user';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@theme/mui';
import withData from '@utils/apollo-client';
import redirect from '@utils/redirect';
import NextApp from 'next/app';
import Head from 'next/head';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import Layout from '../src/components/Layout/Layout';

const App = ({ Component, pageProps, apollo, router, me }) => {
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
          role={me?.role}
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

const publicRoutes = ['/login'];

const adminRoutes = ['/admin', '/users'];

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);

  const context = appContext.ctx;

  const currentPath = context.pathname;

  return { ...appProps };

  // if (publicRoutes.includes(currentPath)) {
  //   return { ...appProps };
  // }

  // const apolloClient = context.apolloClient;

  // try {
  //   const response = await apolloClient.query({ query: ME_QUERY });
  //   if (!response.data.me) {
  //     redirect(context, '/login');
  //     return { ...appProps };
  //   }

  //   if (
  //     response.data.me.role === 'ADMIN' &&
  //     !adminRoutes.includes(currentPath)
  //   ) {
  //     redirect(context, '/admin');

  //     return {
  //       me: response.data.me,
  //       ...appProps,
  //     };
  //   }

  //   return {
  //     me: response.data.me,
  //     ...appProps,
  //   };
  // } catch (err) {
  //   redirect(context, '/login');
  //   return {
  //     ...appProps,
  //   };
  // }
};

export default withData(App);
