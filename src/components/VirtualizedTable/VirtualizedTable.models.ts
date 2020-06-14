import { WithStyles } from '@material-ui/core';

import { styles } from './VirtualizedTable.styles';

interface ColumnData {
  dataKey: string;
  label: string;
  numeric?: boolean;
  width: number;
}

export interface Row {
  index: number;
}

export interface MuiVirtualizedTableProps extends WithStyles<typeof styles> {
  columns: ColumnData[];
  headerHeight?: number;
  onRowClick?: () => void;
  rowCount: number;
  rowGetter: (row: Row) => Record<string, string | number>;
  rowHeight?: number;
}
