import { makeStyles } from '@material-ui/core';

const images = ['ape', 'bear', 'goat', 'horse', 'lion', 'panther', 'panther-2'];

const randomElement = images[Math.floor(Math.random() * images.length)];

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(/images/${randomElement}.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
