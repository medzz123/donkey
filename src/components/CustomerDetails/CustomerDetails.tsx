import FormikSelect from '@components/FormikSelect';
import FormikTextInput from '@components/FormikTextInput';
import Modal from '@components/Modal';
import VirtualizedTable from '@components/VirtualizedTable';
import constants from '@domain/constants';
import { Box, Button, Grid, Paper } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';

import customers from '../../mocks/uid.json';

const CustomerDetails = () => {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);

  const router = useRouter();

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleClose = () => {
    setOpen(false);
    router.push(
      constants.routes.privateRoutes.customers,
      constants.routes.privateRoutes.customers,
      { shallow: true }
    );
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const customerId = router.query.uid;

  const customer = React.useMemo(() => {
    if (!customerId) {
      return undefined;
    }

    const unformattedCustomer = customers[customerId as string];

    return {
      profile: {
        id: { value: unformattedCustomer.profile.id, disabled: true },
        name: { value: unformattedCustomer.profile.name },
        contact: { value: unformattedCustomer.profile.contact },
        lineOne: { value: unformattedCustomer.profile.lineOne },
        lineTwo: { value: unformattedCustomer.profile.lineTwo },
        city: { value: unformattedCustomer.profile.city },
        country: { value: unformattedCustomer.profile.country },
        postcode: { value: unformattedCustomer.profile.postcode },
        mobilePhone: { value: unformattedCustomer.profile.mobilePhone },
        workPhone: { value: unformattedCustomer.profile.workPhone },
        accountType: {
          value: unformattedCustomer.profile.accountType,
          select: true,
          options: [
            { value: 'Casual', label: 'Casual' },
            { value: 'Account Type', label: 'Account Type' },
          ],
        },
      },
      vehicles: [...unformattedCustomer.vehicles],
    };
  }, [customerId]);

  React.useEffect(() => {
    if (customerId) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [customerId]);

  if (!customer) {
    return null;
  }

  return (
    <Modal
      title={customer.profile.name.value}
      onClose={handleClose}
      open={open}
    >
      <Formik
        initialValues={{
          id: customer.profile.id.value,
          name: customer.profile.name.value,
          contact: customer.profile.contact.value,
          lineOne: customer.profile.lineOne.value,
          lineTwo: customer.profile.lineTwo.value,
          city: customer.profile.city.value,
          country: customer.profile.country.value,
          postcode: customer.profile.postcode.value,
          mobilePhone: customer.profile.mobilePhone.value,
          workPhone: customer.profile.workPhone.value,
          accountType: customer.profile.accountType.value,
        }}
        onSubmit={() => {
          console.log('Hey');
        }}
      >
        {({ isSubmitting, dirty }) => (
          <Form style={{ width: 800 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              {Object.entries(customer.profile).map(([key, value], index) => {
                const cc: {
                  value: string;
                  disabled?: boolean;
                  select?: boolean;
                  options?: { value: string; label: string }[];
                } = value;
                const label = key.replace(/([A-Z])/g, ' $1').trim();
                const disabled = cc.disabled ? cc.disabled : !edit;

                if (cc.select) {
                  return (
                    <div key={`row-${index}`} style={{ marginRight: 20 }}>
                      <FormikSelect
                        name={key}
                        style={{ minWidth: 370 }}
                        disabled={disabled}
                        label={label}
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        data={cc.options!}
                      />
                    </div>
                  );
                }

                return (
                  <div key={`row-${index}`} style={{ marginRight: 20 }}>
                    <FormikTextInput
                      name={key}
                      style={{ minWidth: 370 }}
                      disabled={disabled}
                      label={label}
                    />
                  </div>
                );
              })}
            </div>
            <Box mt={5} />
            <Paper style={{ height: 192, maxWidth: 800 }}>
              <VirtualizedTable
                rowCount={customer.vehicles.length}
                rowGetter={({ index }) => customer.vehicles[index]}
                columns={[
                  {
                    width: 150,
                    label: 'Make',
                    dataKey: 'make',
                  },
                  {
                    width: 150,
                    label: 'Model',
                    dataKey: 'model',
                  },
                  {
                    width: 200,
                    label: 'Registration Number',
                    dataKey: 'regNo',
                  },
                  {
                    width: 150,
                    label: 'Years Used',
                    dataKey: 'years',
                  },
                  {
                    width: 150,
                    label: 'Color',
                    dataKey: 'color',
                  },
                ]}
              />
            </Paper>
            <Box mt={5} />
            <Grid
              direction="row"
              container={true}
              style={{ justifyContent: 'space-between' }}
            >
              {dirty ? (
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  disabled={isSubmitting}
                >
                  Save
                </Button>
              ) : (
                <Button
                  variant="contained"
                  type="button"
                  color={edit ? 'inherit' : 'primary'}
                  onClick={handleEdit}
                >
                  {edit ? 'Cancel Edit' : 'Edit Customer'}
                </Button>
              )}
              <Button variant="contained" type="button">
                Add Vehicle
              </Button>
              <Button variant="contained" type="button">
                Add Discount
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CustomerDetails;
