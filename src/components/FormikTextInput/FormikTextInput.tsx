import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

const FormikTextInput = ({ label, ...props }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [field, meta] = useField(props);
  return (
    <>
      <TextField {...field} {...props} placeholder={label} />
      <p>{meta.touched && meta.error && meta.error}</p>
    </>
  );
};

export default FormikTextInput;
