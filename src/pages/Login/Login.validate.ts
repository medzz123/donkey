import { LoginValues } from './Login.models';
import { FormikErrors } from 'formik';

export const validateLogIn = (values: LoginValues) => {
  const errors: FormikErrors<LoginValues> = {};
  if (!values.username) {
    errors.username = 'Username is required';
  }

  if (!values.password) {
    errors.password = 'Enter a password';
  }

  return errors;
};
