import React from 'react';
import { useField } from 'formik';

const FormikTextInput = ({ label, ...props }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [field, meta] = useField(props);
  return (
    <>
      <input type="text" {...field} {...props} placeholder={label} />
      <p>{meta.touched && meta.error && meta.error}</p>
    </>
  );
};

export default FormikTextInput;
