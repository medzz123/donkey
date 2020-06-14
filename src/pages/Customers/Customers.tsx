import CreateCustomer from '@components/CreateCustomer';
import { CreateCustomerRefs } from '@components/CreateCustomer/CreateCustomer.models';
import CustomerDetails from '@components/CustomerDetails';
import VirtualizedTable from '@components/VirtualizedTable';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

import data from '../../mocks/jobs.json';

const Customers = () => {
  const modal = React.useRef<CreateCustomerRefs>(null);

  const openModal = () => {
    modal.current?.handleOpen();
  };

  return (
    <div>
      <Grid direction="row" container={true}>
        <CreateCustomer onSuccess={() => console.log('Hey')} ref={modal} />
        <CustomerDetails />
        <Typography variant="h4" style={{ marginRight: 20 }}>
          Customers
        </Typography>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={openModal}
        >
          Add new Customer
        </Button>
      </Grid>
      <Box mt={5} />
      <Grid
        direction="row"
        container={true}
        style={{ width: 400, justifyContent: 'space-between' }}
      >
        <Link href="/customers/[uid]" as="/customers/1" scroll={false} passHref>
          <a>Customer 1</a>
        </Link>
        <Link href="/customers/[uid]" as="/customers/2" scroll={false} passHref>
          <a>Customer 2</a>
        </Link>
        <Link href="/customers/[uid]" as="/customers/3" scroll={false} passHref>
          <a>Customer 3</a>
        </Link>
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
