import { UserValues } from './CreateUser.models';
import { FormikErrors } from 'formik';

export const validateCreateUser = (values: UserValues) => {
  const errors: FormikErrors<UserValues> = {};
  if (!values.username) {
    errors.username = 'Username is required';
  }

  if (!values.password) {
    errors.password = 'Enter a password';
  }

  if (!values.name) {
    errors.name = 'Enter a name';
  }

  return errors;
};
