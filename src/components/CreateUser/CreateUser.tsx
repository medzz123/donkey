import { useMutation } from '@apollo/react-hooks';
import FormikTextInput from '@components/FormikTextInput';
import Modal from '@components/Modal';
import { CREATE_USER_MUTATION } from '@domain/mutations/user';
import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';

import { CreateUserProps } from './CreateUser.models';
import { useStyles } from './CreateUser.styles';
import { validateCreateUser } from './CreateUser.validate';

const CreateUser: React.FunctionComponent<CreateUserProps> = (props) => {
  const { onSuccess, open, handleClose } = props;
  const [createUser] = useMutation(CREATE_USER_MUTATION);

  const classes = useStyles();

  const notifyError = () => {
    toast.error('Creating user failed 😋');
  };

  const notifySuccess = () => {
    toast.success('Creating user succeeded 😋');
  };

  return (
    <Modal open={open} onClose={handleClose} title="Create User">
      <Formik
        initialValues={{ name: '', password: '', username: '' }}
        validate={validateCreateUser}
        onSubmit={async (values, actions) => {
          try {
            await createUser({
              variables: {
                ...values,
              },
            });

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
            <div className={classes.form}>
              <FormikTextInput name="name" label="Name" />
              <FormikTextInput name="username" label="Username" />
              <FormikTextInput name="password" label="Password" />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={props.isSubmitting}
                className={classes.button}
                fullWidth={true}
              >
                Create New User
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateUser;
