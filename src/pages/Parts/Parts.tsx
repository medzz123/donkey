import VirtualizedTable from '@components/VirtualizedTable';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import { withAuth } from '@utils/withAuth';
import React from 'react';

import data from '../../mocks/parts.json';

const Parts = () => {
  return (
    <div>
      <Grid direction="row" container={true}>
        <Typography variant="h4" style={{ marginRight: 20 }}>
          Parts
        </Typography>
        <Button type="button" variant="contained" color="primary">
          Add new part
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
              label: 'Part Code',
              dataKey: 'partCode',
            },
            {
              width: 120,
              label: 'Name',
              dataKey: 'name',
            },
            {
              width: 120,
              label: 'Quantity',
              dataKey: 'quantity',
            },
            {
              width: 120,
              label: 'Price',
              dataKey: 'price',
            },
            {
              width: 120,
              label: 'Manufacturer',
              dataKey: 'manufacturer',
            },
            {
              width: 120,
              label: 'Description',
              dataKey: 'description',
            },
            {
              width: 120,
              label: 'Vehicle Type',
              dataKey: 'vehicleType',
            },
            {
              width: 120,
              label: 'Threshold',
              dataKey: 'threshold',
            },
          ]}
        />
      </Paper>
    </div>
  );
};

Parts.getInitialProps = async () => {
  return {
    showLayout: true,
    title: 'Parts',
  };
};

export default withAuth(Parts);
