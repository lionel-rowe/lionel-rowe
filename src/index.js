import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#222333',
      contrastText: '#fff'
    },
    secondary: {
      main: '#f50057',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true
  }
});

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </I18nextProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
