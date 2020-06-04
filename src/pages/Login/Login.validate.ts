import { LoginValues } from "./Login.models";
import { FormikErrors } from "formik";

export const validateLogIn = (values: LoginValues) => {
  const errors: FormikErrors<LoginValues> = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Enter a password";
  }

  return errors;
};
