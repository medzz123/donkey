import FormikSelect from '@components/FormikSelect';
import FormikTextInput from '@components/FormikTextInput';
import Modal from '@components/Modal';
import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';

import {
  CreateCustomerProps,
  CreateCustomerRefs,
} from './CreateCustomer.models';
import { useStyles } from './CreateCustomer.styles';
import { validateCreateCustomer } from './CreateCustomer.validate';

const CreateCustomer = React.forwardRef<
  CreateCustomerRefs,
  CreateCustomerProps
>((props, ref) => {
  const { onSuccess } = props;
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  React.useImperativeHandle(ref, () => ({
    handleClose,
    handleOpen,
  }));

  const classes = useStyles();

  const notifyError = () => {
    toast.error('Creating customer failed 😋');
  };

  const notifySuccess = () => {
    toast.success('Creating customer succeeded 😋');
  };

  return (
    <Modal open={open} onClose={handleClose} title="Create User">
      <Formik
        initialValues={{
          name: '',
          contact: '',
          lineOne: '',
          lineTwo: '',
          city: '',
          country: '',
          postcode: '',
          mobilePhone: '',
          workPhone: '',
          accountType: 'Casual',
        }}
        validate={validateCreateCustomer}
        onSubmit={async (values, actions) => {
          try {
            console.log('Values', values);
            notifySuccess();
            onSuccess();
            actions.resetForm();
          } catch (e) {
            notifyError();
            console.error('Creating user failed with error: ', e);
          }
        }}
      >
        {(props) => (
          <Form>
            <div className={classes.root}>
              <div className={classes.form}>
                <FormikTextInput name="name" label="Name" />
                <FormikTextInput
                  name="contact"
                  label="Contact Name (Optional)"
                />
                <FormikTextInput name="mobilePhone" label="Mobile Phone" />
                <FormikTextInput
                  name="workPhone"
                  label="Work Phone (Optional)"
                />
                <FormikSelect
                  name="accountType"
                  label="Account Type"
                  placeholder="Please choose a position"
                  data={[
                    { value: 'Casual', label: 'Casual' },
                    { value: 'Account Holder', label: 'Account Holder' },
                  ]}
                />
              </div>
              <div className={classes.form}>
                <FormikTextInput name="lineOne" label="Line One" />
                <FormikTextInput name="lineTwo" label="Line Two (Optional)" />
                <FormikTextInput name="city" label="City" />
                <FormikTextInput name="country" label="Country" />
                <FormikTextInput
                  name="postcode"
                  label="Postcode (If applicable)"
                />
              </div>
            </div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={props.isSubmitting}
              className={classes.button}
              fullWidth={true}
            >
              Create New Customer
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
});

CreateCustomer.displayName = 'Create Customer';

export default CreateCustomer;
