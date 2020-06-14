import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import React from 'react';

import { UsersTableProps } from './UsersTable.models';
import { useStyles } from './UsersTable.styles';

const UsersTable: React.FunctionComponent<UsersTableProps> = (props) => {
  const { data } = props;

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Rate</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={`${row.name}-${index}`}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>Ugendo</TableCell>
              <TableCell>£10.5</TableCell>
              <TableCell>
                <IconButton>
                  <Edit color="secondary" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
