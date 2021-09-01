import { red } from '@material-ui/core/colors';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Colors from './colors';

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: Colors.primaryColor,
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;