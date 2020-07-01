import CreateUser, { CreateUserRefs } from '@components/CreateUser';
import VirtualizedTable from '@components/VirtualizedTable';
import { Button, Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { NextPage } from 'next';
import React from 'react';

import { useStyles } from './Users.styles';

const Staff: NextPage = () => {
  const modal = React.useRef<CreateUserRefs>(null);

  const handleOpen = () => {
    modal.current?.handleOpen();
  };

  const classes = useStyles();

  const rows = [
    {
      name: 'Ugendo',
      username: 'uga',
      role: 'Admin',
      rate: '1.0',
    },
    {
      name: 'Bugendo',
      username: 'buga',
      role: 'Receptionist',
      rate: '1.0',
    },
  ];

  const onCreateUser = () => {
    console.log('You think you created a user bitch');
  };

  return (
    <div>
      <div className={classes.header}>
        <Typography variant="h4" className={classes.title}>
          List of users
        </Typography>
        <Button
          type="button"
          onClick={handleOpen}
          variant="contained"
          color="primary"
        >
          Create User
        </Button>
      </div>
      <Divider className={classes.divider} />
      <Paper style={{ height: 432, maxWidth: 1000 }}>
        <VirtualizedTable
          rowCount={rows.length}
          rowGetter={({ index }) => rows[index]}
          columns={[
            {
              width: 200,
              label: 'Name',
              dataKey: 'name',
            },
            {
              width: 200,
              label: 'Username',
              dataKey: 'username',
            },
            {
              width: 200,
              label: 'Role',
              dataKey: 'role',
            },
            {
              width: 200,
              label: 'Rate',
              dataKey: 'rate',
            },
          ]}
        />
      </Paper>
      <CreateUser onSuccess={onCreateUser} ref={modal} />
    </div>
  );
};

Staff.getInitialProps = async () => {
  return {
    showLayout: true,
    title: 'Staff',
  };
};

export default Staff;
