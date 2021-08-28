import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import Colors from './colors';

// A custom theme for this app
const theme = createTheme({
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

export default theme;