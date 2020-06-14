import { FormHelperText, MenuItem, Select } from '@material-ui/core';
import { useField } from 'formik';
import React from 'react';

import { FormikSelectProps } from './FormikSelect.models';
import { useStyles } from './FormikSelect.styles';

const FormikSelect: React.FunctionComponent<FormikSelectProps> = (props) => {
  const { data, name } = props;
  const [field, meta, helpers] = useField(name);

  const error = meta.touched && !!meta.error;

  const classes = useStyles();
  return (
    <div className={classes.select}>
      <Select
        {...props}
        error={error}
        onChange={(e) => {
          helpers.setValue(e.target.value);
        }}
        onBlur={() => {
          helpers.setTouched(true);
        }}
        value={field.value}
        fullWidth={true}
      >
        {data.map((menuItem, index) => (
          <MenuItem key={`${menuItem.value}-${index}`} value={menuItem.value}>
            {menuItem.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error ? meta.error : ' '}</FormHelperText>
    </div>
  );
};

export default FormikSelect;
