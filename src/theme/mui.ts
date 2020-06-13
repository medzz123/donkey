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
      black: '#232528',
      white: '#FFFCF9',
    },
    primary: {
      main: '#446DF6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#FF3366',
    },
    background: {
      default: '#EDEDF4',
    },
  },
});

export default theme;

// export const palette = {
//   eireBlack: '#171D1C',
//   cultured: '#FBFBFB',
//   ceruleanBlue: '#5863F8',
//   radicalRed: '#FF3366',
//   carolinaBlue: '#20A4F3',
//   bitterSweet: '#FF715B',
// };
