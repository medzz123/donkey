import {
  Box,
  Button,
  Card,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { withAuth } from '@utils/withAuth';
import React from 'react';

import { useStyles } from './Home.styles';

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <Card className={classes.cardRoot}>
          <Typography variant="h5">3 Jobs Are unassigned!</Typography>
          <Box mt={2} />
          <Divider className={classes.divider} />
          <Box mt={2} />
          <List>
            <ListItem button>
              <ListItemText primary="ID: 7891234 Days: 7" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
          <Box mt={2} />
          <Divider className={classes.divider} />
          <Box mt={2} />
          <Button variant="contained" color="primary">
            Assign Jobs
          </Button>
        </Card>
        <Card className={classes.cardRoot}>
          <Typography variant="h5">Monthly Reports</Typography>
          <Box mt={2} />
          <Divider className={classes.divider} />
          <Box mt={2} />
          <List>
            <ListItem button>
              <ListItemText primary="January MOT" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="March Filer" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="November Service" />
            </ListItem>
          </List>
          <Box mt={2} />
          <Divider className={classes.divider} />
          <Box mt={2} />
          <Button variant="contained" color="primary">
            Generate Report
          </Button>
        </Card>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  return {
    showLayout: true,
    title: 'Home',
  };
};

export default withAuth(Home);
