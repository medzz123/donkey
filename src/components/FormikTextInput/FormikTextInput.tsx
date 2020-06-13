import TextField from '@material-ui/core/TextField';
import { useField } from 'formik';
import React from 'react';

import { useStyles } from './FormikInput.styles';

const FormikTextInput = ({
  label,
  ...props
}: {
  name: string;
  label?: string;
  type?: string;
  autoComplete?: string;
}) => {
  const [field, meta, helpers] = useField(props);

  const error = meta.touched && !!meta.error;

  const classes = useStyles();

  return (
    <TextField
      {...props}
      className={classes.input}
      error={error}
      label={label}
      onChange={(e) => {
        helpers.setValue(e.target.value);
      }}
      onBlur={() => {
        helpers.setTouched(true);
      }}
      value={field.value}
      helperText={error ? meta.error : ' '}
      fullWidth={true}
    />
  );
};

export default FormikTextInput;
