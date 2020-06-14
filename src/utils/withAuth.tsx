import constants from '@domain/constants';
import { ME_QUERY } from '@domain/queries/user';
import React from 'react';

import redirect from './redirect';

export const withAuth = (C) => {
  return class AuthComponent extends React.Component {
    static async getInitialProps({ apolloClient, ...ctx }) {
      const pageProps = C.getInitialProps && (await C.getInitialProps(ctx));
      try {
        const response = await apolloClient.query({ query: ME_QUERY });
        if (!response || !response.data || !response.data.me) {
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
        redirect(ctx, constants.routes.privateRoutes.staff);
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
