import React from 'react';
import { withAuth } from '@utils/withAuth';
import { NextPage } from 'next';
import { useQuery } from '@apollo/react-hooks';
import { USERS_LIST_QUERY } from '@domain/queries/user';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { useStyles } from './Home.styles';
import UsersTable from '@components/UsersTable';
import CreateUser from '@components/CreateUser';

const Home: NextPage = () => {
  const { data, loading, refetch, networkStatus } = useQuery(USERS_LIST_QUERY);

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

  console.log('Data', data);
  console.log('Loading', loading);
  console.log('Network', networkStatus);

  return (
    <div>
      <Typography variant="h4">List of users</Typography>
      <Divider className={classes.divider} />
      <UsersTable data={rows} />
      <Divider className={classes.divider} />
      <CreateUser onSuccess={onCreateUser} />
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
