import * as React from 'react';
import redirect from './redirect';
import { ME_QUERY } from '@domain/queries/user';

export const withAuth = (C) => {
  return class AuthComponent extends React.Component {
    static async getInitialProps({ apolloClient, ...ctx }) {
      try {
        const response = await apolloClient.query({ query: ME_QUERY });
        if (!response || !response.data || !response.data.me) {
          redirect(ctx, '/login');
          return {
            me: null,
          };
        }

        return {
          me: response.data.me,
        };
      } catch (err) {
        redirect(ctx, '/login');
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
