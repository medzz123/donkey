import { useMutation } from '@apollo/react-hooks';
import FormikTextInput from '@components/FormikTextInput';
import constants from '@domain/constants';
import { LOGIN_MUTATION } from '@domain/mutations/auth';
import { ME_QUERY } from '@domain/queries/user';
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import redirect from '@utils/redirect';
import { Form, Formik } from 'formik';
import Cookie from 'js-cookie';
import Router from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';

import { useStyles } from './Login.styles';
import { validateLogIn } from './Login.validate';

const Login = () => {
  const [loginMutation] = useMutation(LOGIN_MUTATION);

  const notify = () => {
    toast.error('Login failed, please check your credentials');
  };

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
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
              <Form className={classes.form} noValidate>
                <FormikTextInput
                  name="username"
                  label="Email"
                  variant="outlined"
                />
                <Box mt={2} />
                <FormikTextInput
                  name="password"
                  variant="outlined"
                  type="password"
                  autoComplete="password"
                  label="Password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={props.isSubmitting}
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
          <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
              Copyright © Donkey App {new Date().getFullYear()}.
            </Typography>
          </Box>
        </div>
      </Grid>
    </Grid>
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
