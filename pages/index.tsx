import constants from '@domain/constants';
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
  redirect(ctx, constants.routes.publicRoutes.login);
  return {};
};

export default Index;
