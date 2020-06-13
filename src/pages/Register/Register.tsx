import React from 'react';
import { RegisterPageType } from './Register.models';
import { withAuth } from '@utils/withAuth';
import Cookie from 'js-cookie';
import Router from 'next/router';

const Register: RegisterPageType = () => {
  return (
    <div>
      <div>Sup sup in register</div>
      <button
        type="button"
        onClick={() => {
          Cookie.remove('token');
          Router.push('/login');
        }}
      >
        Log out
      </button>
    </div>
  );
};

Register.getInitialProps = async () => {
  return {
    showLayout: true,
    meta: {
      title: 'Donkey',
      page: 'Register',
      description: 'Your friendly donkey app!',
    },
  };
};

export default withAuth(Register);
