import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

// import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import theme from './muiTheme';
import 'typeface-roboto';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGem, faLink, faCode } from '@fortawesome/free-solid-svg-icons';

false && console.log(i18n);

library.add(fab, faLink, faGem, faCode);

ReactDOM.render(
  // <React.StrictMode>
    // <I18nextProvider i18n={i18n}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    // </I18nextProvider>
  // </React.StrictMode>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
