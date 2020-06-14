import { Typography } from '@material-ui/core';
import React from 'react';

const Payments = () => {
  return (
    <div>
      <Typography variant="h1">Da Lord</Typography>
      Dis da Payments page boy!
    </div>
  );
};

Payments.getInitialProps = async () => {
  return {
    showLayout: true,
    meta: {
      title: 'Donkey',
      page: 'Payments',
      description: 'Your friendly donkey app!',
    },
  };
};

export default Payments;
