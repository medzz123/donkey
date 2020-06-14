import Modal from '@components/Modal';
import VirtualizedTable from '@components/VirtualizedTable';
import constants from '@domain/constants';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';

import customers from '../../mocks/uid.json';

const CustomerDetails = () => {
  const [open, setOpen] = React.useState(false);

  const router = useRouter();

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
      return {
        id: 'broken',
        vehicles: [],
      };
    }

    return {
      ...customers[customerId as string],
    };
  }, [customerId]);

  React.useEffect(() => {
    if (customerId) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [customerId]);

  if (!customerId) {
    return null;
  }

  return (
    <Modal title={customer.profile.name} onClose={handleClose} open={open}>
      <div style={{ width: 600 }}>
        {Object.entries(customer.profile).map(([key, value], index) => (
          <Grid
            direction="row"
            container={true}
            key={`row-${index}`}
            style={{ justifyContent: 'space-between', marginBottom: 10 }}
          >
            <Typography
              variant="body1"
              style={{ marginRight: 20, textTransform: 'capitalize' }}
            >
              {key.replace(/([A-Z])/g, ' $1').trim()}:
            </Typography>
            <Typography variant="body1">{value as string}</Typography>
          </Grid>
        ))}
        <Box mt={5} />
        <Paper style={{ height: 192, maxWidth: 600 }}>
          <VirtualizedTable
            rowCount={customer.vehicles.length}
            rowGetter={({ index }) => customer.vehicles[index]}
            columns={[
              {
                width: 120,
                label: 'Make',
                dataKey: 'make',
              },
              {
                width: 120,
                label: 'Model',
                dataKey: 'model',
              },
              {
                width: 150,
                label: 'Registration Number',
                dataKey: 'regNo',
              },
              {
                width: 120,
                label: 'Years Used',
                dataKey: 'years',
              },
              {
                width: 120,
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
          <Button variant="contained" color="primary">
            Edit Customer
          </Button>
          <Button variant="contained">Add Vehicle</Button>
          <Button variant="contained">Add Discount</Button>
        </Grid>
      </div>
    </Modal>
  );
};

export default CustomerDetails;
