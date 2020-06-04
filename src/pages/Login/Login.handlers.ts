import { FormikHelpers } from "formik";
import { LoginValues } from "./Login.models";

export const handleLoginSubmit = (
  values: LoginValues,
  formikHelpers: FormikHelpers<LoginValues>
) => {
  const { setSubmitting } = formikHelpers;
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};
