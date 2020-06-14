import { useMutation } from '@apollo/react-hooks';
import FormikTextInput from '@components/FormikTextInput';
import constants from '@domain/constants';
import { LOGIN_MUTATION } from '@domain/mutations/auth';
import { ME_QUERY } from '@domain/queries/user';
import { Button, Typography } from '@material-ui/core';
import redirect from '@utils/redirect';
import { Form, Formik } from 'formik';
import Cookie from 'js-cookie';
import Router from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';

import { Wrapper } from './Login.styles';
import { validateLogIn } from './Login.validate';

const Login = () => {
  const [loginMutation] = useMutation(LOGIN_MUTATION);

  const notify = () => {
    toast.error('Login failed, please check your credentials');
  };

  return (
    <Wrapper>
      <Typography variant="h3">Welcome back!</Typography>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={validateLogIn}
        onSubmit={async (values) => {
          try {
            const response = await loginMutation({
              variables: {
                username: values.username,
                password: values.password,
              },
            });

            Cookie.set('token', response.data.loginUser.token);
            Router.reload();
          } catch (e) {
            notify();
            console.log('Login failed', e);
          }
        }}
      >
        {(props) => (
          <Form>
            <FormikTextInput name="username" label="Email" />
            <FormikTextInput
              name="password"
              type="password"
              autoComplete="password"
              label="Password"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={props.isSubmitting}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

Login.getInitialProps = async (ctx) => {
  try {
    const response = await ctx.apolloClient.query({ query: ME_QUERY });
    if (response?.data?.me) {
      redirect(ctx, constants.routes.privateRoutes.staff);
    } else {
      console.log('Stating in login');
    }
  } catch (err) {
    console.log('Stating in login');
  }

  return {
    showLayout: false,
    meta: {
      title: 'Donkey',
      page: 'Login',
      description: 'Your friendly donkey app!',
    },
  };
};

export default Login;
