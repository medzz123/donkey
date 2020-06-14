import { SelectProps } from '@material-ui/core';

interface MenuItemType {
  value: string;
  label: string;
}

export interface FormikSelectProps extends SelectProps {
  data: MenuItemType[];
  name: string;
}
