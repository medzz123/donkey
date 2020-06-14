import { ModalProps as MuiModalProps } from '@material-ui/core';

export interface ModalProps extends MuiModalProps {
  open: boolean;
  onClose: () => void;
}
