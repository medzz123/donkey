import React from 'react';
import { withAuth } from '@utils/withAuth';
import { NextPage } from 'next';
import { useQuery } from '@apollo/react-hooks';
import { USERS_LIST_QUERY } from '@domain/queries/user';

const Home: NextPage = () => {
  const { data } = useQuery(USERS_LIST_QUERY);

  console.log('Data', data);

  return (
    <div>
      <div>Hye</div>
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
