import { useMutation } from '@apollo/react-hooks';
import FormikSelect from '@components/FormikSelect';
import FormikTextInput from '@components/FormikTextInput';
import Modal from '@components/Modal';
import { CREATE_USER_MUTATION } from '@domain/mutations/user';
import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';

import { CreateUserProps, CreateUserRefs } from './CreateUser.models';
import { useStyles } from './CreateUser.styles';
import { validateCreateUser } from './CreateUser.validate';

const CreateUser = React.forwardRef<CreateUserRefs, CreateUserProps>(
  (props, ref) => {
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
          initialValues={{
            name: '',
            password: '',
            username: '',
            role: 'Ugendo',
            rate: '',
          }}
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
                <FormikSelect
                  name="role"
                  label="Role"
                  data={[
                    { value: 'Ugendo', label: 'Bugendo' },
                    { value: 'Nintendo', label: 'Suckendo' },
                  ]}
                />
                <FormikTextInput name="rate" label="Rate" />
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
  }
);

CreateUser.displayName = 'Create User';

export default CreateUser;
