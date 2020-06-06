import React from 'react';
import { LoginPageType } from './Login.models';
import { Formik, Form } from 'formik';
import FormikTextInput from '@components/FormikTextInput';
import { validateLogIn } from './Login.validate';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_MUTATION } from './Login.domain';
import { Wrapper, Left, Right, FormWrapper } from './Login.styles';
import { Title } from '@theme/typography';

const Login: LoginPageType = () => {
  const [loginMutation, { data }] = useMutation(LOGIN_MUTATION);

  return (
    <Wrapper>
      <Left>
        <FormWrapper>
          <Title>Welcome back!</Title>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={validateLogIn}
            onSubmit={async (values) => {
              try {
                await loginMutation({
                  variables: { email: values.email, password: values.password },
                });

                console.log('Succeeded login', data);
              } catch (e) {
                console.log('Login failed', e);
              }
            }}
          >
            {(props) => (
              <Form>
                <FormikTextInput name="email" type="email" label="Email" />
                <FormikTextInput
                  name="password"
                  type="password"
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
    showLayout: false,
    meta: {
      title: 'Donkey',
      page: 'Login',
      description: 'Your friendly donkey app!',
    },
  };
};

export default Login;
