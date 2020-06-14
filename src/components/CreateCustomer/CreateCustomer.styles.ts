import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  form: {
    '&:first-child': {
      marginRight: 30,
    },
  },
  button: {
    marginTop: 30,
  },
});
