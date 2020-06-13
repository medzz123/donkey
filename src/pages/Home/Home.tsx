import { useQuery } from '@apollo/react-hooks';
import CreateUser from '@components/CreateUser';
import UsersTable from '@components/UsersTable';
import { USERS_LIST_QUERY } from '@domain/queries/user';
import { Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withAuth } from '@utils/withAuth';
import { NextPage } from 'next';
import React from 'react';

import { useStyles } from './Home.styles';

const Home: NextPage = () => {
  const { data, loading, refetch, networkStatus } = useQuery(USERS_LIST_QUERY);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const classes = useStyles();

  const rows = React.useMemo(() => {
    if (loading || !data) {
      return [];
    }

    return data.users;
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
      <UsersTable data={rows} />
      <Divider className={classes.divider} />
      <CreateUser
        onSuccess={onCreateUser}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

Home.getInitialProps = async () => {
  return {
    showLayout: true,
    meta: {
      title: 'Donkey',
      page: 'Home',
      description: 'Your friendly donkey app!',
    },
  };
};

export default withAuth(Home);
