import { makeStyles } from '@material-ui/core/styles';
import theme from '@theme/mui';

export const useStyles = makeStyles({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    borderRadius: theme.spacing(1),
  },
  header: {
    padding: theme.spacing(2, 0),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: { padding: 0 },
  divider: {
    margin: theme.spacing(2, -4),
  },
});

export const modalStyle = {
  top: '50%',
  left: '50%',
  transform: `translate(-50%, -50%)`,
};
