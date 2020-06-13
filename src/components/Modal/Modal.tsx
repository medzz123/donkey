import React from 'react';
import { Modal as MuiModal } from '@material-ui/core';
import { ModalProps } from './Modal.models';
import { modalStyle, useStyles } from './Modal.styles';

const Modal: React.FunctionComponent<ModalProps> = (props) => {
  const { children, handleClose } = props;
  const classes = useStyles();

  return (
    <MuiModal onClose={handleClose} {...props}>
      <div style={modalStyle} className={classes.paper}>
        {children}
      </div>
    </MuiModal>
  );
};

export default Modal;
