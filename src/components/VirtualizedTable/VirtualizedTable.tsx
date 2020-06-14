import { withStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import clsx from 'clsx';
import React from 'react';
import {
  AutoSizer,
  Column,
  Table,
  TableCellRenderer,
  TableHeaderProps,
} from 'react-virtualized';

import { MuiVirtualizedTableProps, Row } from './VirtualizedTable.models';
import { styles } from './VirtualizedTable.styles';

const MuiVirtualizedTable: React.FunctionComponent<MuiVirtualizedTableProps> = (
  props
) => {
  const {
    headerHeight = 48,
    rowHeight = 48,
    classes,
    onRowClick,
    columns,
    ...tableProps
  } = props;

  const getRowClassName = ({ index }: Row) => {
    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  const cellRenderer: TableCellRenderer = ({ cellData, columnIndex }) => {
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? 'right'
            : 'left'
        }
      >
        {cellData}
      </TableCell>
    );
  };

  const headerRenderer = ({
    label,
    columnIndex,
  }: TableHeaderProps & { columnIndex: number }) => {
    return (
      <TableCell
        component="div"
        className={clsx(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick
        )}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <Table
          height={height}
          width={width}
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          rowHeight={rowHeight!}
          gridStyle={{
            direction: 'inherit',
          }}
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          headerHeight={headerHeight!}
          className={classes.table}
          {...tableProps}
          rowClassName={getRowClassName}
        >
          {columns.map(({ dataKey, ...other }, index) => {
            return (
              <Column
                key={dataKey}
                headerRenderer={(headerProps) =>
                  headerRenderer({
                    ...headerProps,
                    columnIndex: index,
                  })
                }
                className={classes.flexContainer}
                cellRenderer={cellRenderer}
                dataKey={dataKey}
                {...other}
              />
            );
          })}
        </Table>
      )}
    </AutoSizer>
  );
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

export default VirtualizedTable;
