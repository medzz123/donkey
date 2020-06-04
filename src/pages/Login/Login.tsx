import React from "react";
import { LoginPageType } from "./Login.models";
import { Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import FormikTextInput from "../../components/FormikTextInput";
import { validateLogIn } from "./Login.validate";
import { handleLoginSubmit } from "./Login.handlers";

const Login: LoginPageType = (props) => {
  const {} = props;

  return (
    <div>
      <h1>Login to your account!</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validateLogIn}
        onSubmit={handleLoginSubmit}
      >
        {(props) => (
          <Form>
            <FormikTextInput name="email" type="email" label="Email" />
            <FormikTextInput name="password" type="password" label="Password" />
            <Button type="submit" color="primary" disabled={props.isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

Login.getInitialProps = async () => {
  return {
    showLayout: true,
    meta: {
      title: "Donkey",
      page: "Login",
      description: "Your friendly donkey app!",
    },
  };
};

export default Login;
