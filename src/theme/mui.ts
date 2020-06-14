import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
          scrollBehavior: 'smooth',
        },
        body: {
          margin: 0,
        },
        ul: {
          listStyle: 'none',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
  },
  palette: {
    common: {
      black: '#171D1C',
      white: '#FFFCF9',
    },
    primary: {
      main: '#446DF6',
    },
    secondary: {
      main: '#FF715B',
    },
    error: {
      main: '#FF3366',
    },
    background: {
      default: '#FBFBFB',
    },
  },
});

export default theme;
