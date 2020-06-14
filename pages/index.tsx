import constants from '@domain/constants';
import { ME_QUERY } from '@domain/queries/user';
import redirect from '@utils/redirect';
import React from 'react';

const Index = () => {
  return (
    <div>
      <h1>
        Hello Next.js
        <span role="img" aria-label="Wave">
          👋
        </span>
      </h1>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  try {
    const response = await ctx.apolloClient.query({ query: ME_QUERY });
    if (!response || !response.data || !response.data.me) {
      redirect(ctx, constants.routes.publicRoutes.login);
    }
    redirect(ctx, constants.routes.privateRoutes.staff);
  } catch (err) {
    redirect(ctx, constants.routes.publicRoutes.login);
  }

  return {};
};

export default Index;
