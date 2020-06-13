import * as React from 'react';
import redirect from './redirect';
import { ME_QUERY } from '@domain/queries/user';

export const withAuth = (C) => {
  return class AuthComponent extends React.Component {
    static async getInitialProps({ apolloClient, ...ctx }) {
      const response = await apolloClient.query({ query: ME_QUERY });
      if (!response || !response.data || !response.data.me) {
        redirect(ctx, '/');
        return {
          me: null,
        };
      }

      return {
        me: response.data.me,
      };
    }

    render() {
      return <C {...this.props} />;
    }
  };
};
