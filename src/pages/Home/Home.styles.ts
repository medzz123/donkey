import { makeStyles } from '@material-ui/core';
import theme from '@theme/mui';

export const useStyles = makeStyles({
  cardRoot: {
    maxWidth: 400,
    padding: theme.spacing(2, 4, 3),
    marginRight: 20,
  },
  divider: {
    margin: theme.spacing(0, -4),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});
