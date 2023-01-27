import { createTheme } from '@mui/material/styles';

const MaterialTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2199EA', //Teal
      dark: '#0F5F96',
    },
    secondary: {
      main: '#939598',
      dark: '#57595b',
    },
    error: {
      main: '#FF0000', //Red
      dark: '#DC0000', //Maroon
    },
    success: {
      main: '#42D77D', //Green
      dark: '#3880FF', //Navy Blue
    },
  },
  typography: {
    subtitle1: {
      fontSize: 12,
      lineHeight: 1.33,
      letterSpacing: '0.03em',
    },
    subtitle2: {
      fontSize: 10,
      lineHeight: 1.6,
      letterSpacing: '0.15em',
    },
    h1: {
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.4,
      letterSpacing: '0.04em',
    },
    h2: {
      fontSize: 64,
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h3: {
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: 20,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: 20,
      lineHeight: 1.4,
      letterSpacing: '0.06em',
    },
    body2: {
      fontSize: 16,
      lineHeight: 1.5,
    },
    button: {
      fontSize: 14,
      lineHeight: 2.57,
    },
  },
});

export default MaterialTheme;