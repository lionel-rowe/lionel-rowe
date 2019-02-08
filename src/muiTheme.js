import { createMuiTheme } from '@material-ui/core/styles';
import { /*darken,*/ lighten } from '@material-ui/core/styles/colorManipulator';

const [ primaryColor, secondaryColor, tertiaryColor ] = [ '#222333', '#f50057', '#0065ff' ];
const white = '#ffffff';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      gradient: `${primaryColor}, #550022`,
      contrastText: white,
    },
    secondary: {
      main: secondaryColor,
      gradient: `${secondaryColor}, #FF8E53`,
      contrastText: white,
      extraLight: lighten(secondaryColor, 0.5)
    },
    tertiary: {
      main: tertiaryColor
    }
  },
  typography: {
    useNextVariants: true,
    h1: {
      fontSize: '2rem',
      padding: '0.9em 0 0.5em 0',
      fontWeight: 500,
      color: '#654c55'
    },
    h2: {
      fontSize: '1.7em',
      padding: '0.9em 0 0.5em 0',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5em',
      padding: '0.9em 0 0.5em 0',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.25em',
      padding: '0.9em 0 0.5em 0',
      fontWeight: 500,
    },
  }
});

export default theme;
