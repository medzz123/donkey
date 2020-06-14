import {
  Divider,
  IconButton,
  Modal as MuiModal,
  Typography,
} from '@material-ui/core';
import { ClearRounded } from '@material-ui/icons';
import React from 'react';

import { ModalProps } from './Modal.models';
import { modalStyle, useStyles } from './Modal.styles';

const Modal: React.FunctionComponent<ModalProps> = (props) => {
  const { children, title, onClose } = props;
  const classes = useStyles();

  return (
    <MuiModal {...props} aria-labelledby={title}>
      <div style={modalStyle} className={classes.paper}>
        <React.Fragment>
          <div className={classes.header}>
            <Typography variant="h5">{title}</Typography>
            <IconButton
              type="button"
              className={classes.iconButton}
              onClick={onClose}
            >
              <ClearRounded />
            </IconButton>
          </div>
          <Divider className={classes.divider} />
          {children}
        </React.Fragment>
      </div>
    </MuiModal>
  );
};

export default Modal;
