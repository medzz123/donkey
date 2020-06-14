import VirtualizedTable from '@components/VirtualizedTable';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

import data from '../../mocks/jobs.json';

const Customers = () => {
  return (
    <div>
      <Grid direction="row" container={true}>
        <Typography variant="h4" style={{ marginRight: 20 }}>
          Customers
        </Typography>
        <Button type="button" variant="contained" color="primary">
          Add new Customer
        </Button>
      </Grid>
      <Box mt={5} />
      <Paper style={{ height: 800, maxWidth: 1000 }}>
        <VirtualizedTable
          rowCount={data.length}
          rowGetter={({ index }) => data[index]}
          columns={[
            {
              width: 120,
              label: 'Job Number',
              dataKey: 'jobNumber',
            },
            {
              width: 120,
              label: 'Customer Id',
              dataKey: 'customerId',
            },
            {
              width: 120,
              label: 'Customer Name',
              dataKey: 'customerName',
            },
            {
              width: 120,
              label: 'Date Posted',
              dataKey: 'date',
            },
            {
              width: 120,
              label: 'Vehicle',
              dataKey: 'vehicle',
            },
            {
              width: 120,
              label: 'Model',
              dataKey: 'model',
            },
            {
              width: 120,
              label: 'Status',
              dataKey: 'status',
            },
            {
              width: 120,
              label: 'Service Type',
              dataKey: 'status',
            },
          ]}
        />
      </Paper>
    </div>
  );
};

Customers.getInitialProps = async () => {
  return {
    showLayout: true,
    title: 'Customers',
  };
};

export default Customers;
