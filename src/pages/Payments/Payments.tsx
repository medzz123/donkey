import VirtualizedTable from '@components/VirtualizedTable';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

import data from '../../mocks/payments.json';

const Payments = () => {
  return (
    <div>
      <Grid direction="row" container={true}>
        <Typography variant="h4" style={{ marginRight: 20 }}>
          Payments
        </Typography>
        <Button type="button" variant="contained" color="primary">
          Clear a payment
        </Button>
      </Grid>
      <Box mt={5} />
      <Paper style={{ height: 800, maxWidth: 940 }}>
        <VirtualizedTable
          rowCount={data.length}
          rowGetter={({ index }) => data[index]}
          columns={[
            {
              width: 120,
              label: 'Customer Id',
              dataKey: 'customerId',
            },
            {
              width: 150,
              label: 'Customer Name',
              dataKey: 'name',
            },
            {
              width: 120,
              label: 'Job Number',
              dataKey: 'jobNumber',
            },
            {
              width: 120,
              label: 'Amount',
              dataKey: 'amount',
            },
            {
              width: 120,
              label: 'Due Date',
              dataKey: 'date',
            },
            {
              width: 150,
              label: 'Vehicle Model',
              dataKey: 'vehicleModel',
            },
            {
              width: 120,
              label: 'Status',
              dataKey: 'status',
            },
          ]}
        />
      </Paper>
    </div>
  );
};

Payments.getInitialProps = async () => {
  return {
    showLayout: true,
    title: 'Payments',
  };
};

export default Payments;
