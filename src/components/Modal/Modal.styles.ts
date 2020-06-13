import { makeStyles } from '@material-ui/core/styles';
import theme from '@theme/mui';

export const useStyles = makeStyles({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
});

export const modalStyle = {
  top: '50%',
  left: '50%',
  transform: `translate(-50%, -50%)`,
};
