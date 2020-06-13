import React from 'react';
import { validateCreateUser } from './CreateUser.validate';
import { toast } from 'react-toastify';
import { CREATE_USER_MUTATION } from '@domain/mutations/user';
import { useMutation } from '@apollo/react-hooks';
import { Formik, Form } from 'formik';
import FormikTextInput from '@components/FormikTextInput';
import Button from '@material-ui/core/Button';
import { CreateUserProps } from './CreateUser.models';
import { useStyles } from './CreateUser.styles';

const CreateUser: React.FunctionComponent<CreateUserProps> = (props) => {
  const { onSuccess } = props;
  const [createUser] = useMutation(CREATE_USER_MUTATION);

  const classes = useStyles();

  const notifyError = () => {
    toast.error('Creating user failed 😋');
  };

  const notifySuccess = () => {
    toast.success('Creating user succeeded 😋');
  };

  return (
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
            >
              Create New User
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateUser;
