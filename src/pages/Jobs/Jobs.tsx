import { Typography } from '@material-ui/core';
import React from 'react';

const Jobs = () => {
  return (
    <div>
      <Typography variant="h1">Da Lord</Typography>
      Dis da Jobs page boy!
    </div>
  );
};

Jobs.getInitialProps = async () => {
  return {
    showLayout: true,
    meta: {
      title: 'Donkey',
      page: 'Jobs',
      description: 'Your friendly donkey app!',
    },
  };
};

export default Jobs;
