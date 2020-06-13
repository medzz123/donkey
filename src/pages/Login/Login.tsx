import React from 'react';
import { LoginPageType } from './Login.models';
import { Formik, Form } from 'formik';
import FormikTextInput from '@components/FormikTextInput';
import { validateLogIn } from './Login.validate';
import { useMutation } from '@apollo/react-hooks';
import { Wrapper } from './Login.styles';
import { LOGIN_MUTATION } from '@domain/mutations/auth';
import Cookie from 'js-cookie';
import Router from 'next/router';
import { toast } from 'react-toastify';
import { Typography, Button } from '@material-ui/core';

const Login: LoginPageType = () => {
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
            Router.push('/register');
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

Login.getInitialProps = async () => {
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
