import { FormikErrors } from 'formik';

import { CustomerValues } from './CreateCustomer.models';

export const validateCreateCustomer = (values: CustomerValues) => {
  const errors: FormikErrors<CustomerValues> = {};
  if (!values.name) {
    errors.name = 'Please enter a name';
  }

  if (!values.lineOne) {
    errors.lineOne = 'Please enter a street';
  }

  if (!values.city) {
    errors.city = 'Please enter a city';
  }

  if (!values.country) {
    errors.country = 'Please enter a country';
  }

  if (!values.mobilePhone) {
    errors.mobilePhone = 'Please enter a phone number';
  }

  return errors;
};
