import React from 'react';
import redirect from '@utils/redirect';

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
  redirect(ctx, '/home');

  return {
    showLayout: true,
    meta: {
      title: 'Donkey',
      page: 'Home',
      description: 'Your friendly donkey app!',
    },
  };
};

export default Index;
