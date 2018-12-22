import { createMuiTheme } from '@material-ui/core/styles';

const [primaryColor, secondaryColor] = ['#222333', '#f50057'];
const white = '#ffe';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      gradient: `${primaryColor}, #550022`,
      contrastText: white
    },
    secondary: {
      main: '#f50057',
      gradient: `${secondaryColor}, #FF8E53`,
      contrastText: white
    }
  },
  typography: {
    useNextVariants: true,
    h1: {
      fontSize: '2em',
      padding: '0.9em 0 0.5em 0',
      fontWeight: 500,
      color: '#654c55'
    }
  }
});

export default theme;
