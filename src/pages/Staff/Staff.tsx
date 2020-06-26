import { useQuery } from '@apollo/react-hooks';
import CreateUser, { CreateUserRefs } from '@components/CreateUser';
import VirtualizedTable from '@components/VirtualizedTable';
import { USERS_LIST_QUERY } from '@domain/queries/user';
import { Button, IconButton, Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Edit } from '@material-ui/icons';
import { NextPage } from 'next';
import React from 'react';

import { useStyles } from './Staff.styles';

const Staff: NextPage = () => {
  const { data, loading, refetch, networkStatus } = useQuery(USERS_LIST_QUERY);

  const modal = React.useRef<CreateUserRefs>(null);

  const handleOpen = () => {
    modal.current?.handleOpen();
  };

  const classes = useStyles();

  const rows = React.useMemo(() => {
    if (loading || !data) {
      return [];
    }

    return data.users.map((user) => ({
      ...user,
      role: 'Admin',
      rate: '£1.75',
      edit: (
        <IconButton>
          <Edit color="secondary" />
        </IconButton>
      ),
    }));
  }, [loading, networkStatus]);

  const onCreateUser = () => {
    refetch();
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
            {
              width: 200,
              label: 'Edit',
              dataKey: 'edit',
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
