import React from 'react';
import { LoginPageType } from './Login.models';
import { Formik, Form } from 'formik';
import FormikTextInput from '@components/FormikTextInput';
import { validateLogIn } from './Login.validate';
import { useMutation } from '@apollo/react-hooks';
import { Wrapper, Left, Right, FormWrapper } from './Login.styles';
import { Title } from '@theme/typography';
import { LOGIN_MUTATION } from '@domain/mutations/auth';
import Cookie from 'js-cookie';

const Login: LoginPageType = () => {
  const [loginMutation] = useMutation(LOGIN_MUTATION);

  return (
    <Wrapper>
      <Left>
        <FormWrapper>
          <Title>Welcome back!</Title>
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
              } catch (e) {
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
                <button
                  type="submit"
                  color="primary"
                  disabled={props.isSubmitting}
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </Left>
      <Right>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          explicabo suscipit eum velit omnis? Dicta alias asperiores fuga, illo
          commodi blanditiis dolor ipsa excepturi dolorem, recusandae suscipit
          pariatur minus earum!
        </p>
      </Right>
    </Wrapper>
  );
};

Login.getInitialProps = async () => {
  return {
    showLayout: true,
    meta: {
      title: 'Donkey',
      page: 'Login',
      description: 'Your friendly donkey app!',
    },
  };
};

export default Login;
