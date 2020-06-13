import React from 'react';
import redirect from '@utils/redirect';
import { ME_QUERY } from '@domain/queries/user';

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
      redirect(ctx, '/login');
    }
    redirect(ctx, '/home');
  } catch (err) {
    redirect(ctx, '/login');
  }

  return {};
};

export default Index;
