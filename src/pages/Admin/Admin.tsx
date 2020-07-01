import { Typography } from '@material-ui/core';
import React from 'react';

const Admin = () => {
  return (
    <div>
      <Typography variant="body1">Admin Dashboard</Typography>
    </div>
  );
};

Admin.getInitialProps = async () => {
  return {
    showLayout: true,
    title: 'Admin',
  };
};

export default Admin;
