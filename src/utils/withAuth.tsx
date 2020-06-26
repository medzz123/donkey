import constants from '@domain/constants';
import { ME_QUERY } from '@domain/queries/user';
import React from 'react';

import { parseCookies } from './apollo-client';
import redirect from './redirect';

export const withAuth = (C) => {
  return class AuthComponent extends React.Component {
    static async getInitialProps({ apolloClient, ...ctx }) {
      console.log('Page props', ctx);
      const pageProps = C.getInitialProps && (await C.getInitialProps(ctx));

      const cookies = parseCookies(ctx);

      console.log('WITH AUTH COOKIES = ', cookies);

      if (!cookies['token']) {
        redirect(ctx, constants.routes.publicRoutes.login);
        return { me: null };
      }

      try {
        const response = await apolloClient.query({ query: ME_QUERY });
        if (!response.data.me) {
          redirect(ctx, constants.routes.publicRoutes.login);
          return {
            me: null,
          };
        }

        return {
          me: response.data.me,
          ...pageProps,
        };
      } catch (err) {
        redirect(ctx, constants.routes.publicRoutes.login);
        return {
          me: null,
        };
      }
    }

    render() {
      return <C {...this.props} />;
    }
  };
};
