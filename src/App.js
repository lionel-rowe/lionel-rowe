import React from 'react';
import './App.scss';

import TopNav from './TopNav.js';
import Main from './Main.js';
import BottomBar from './BottomBar.js';

import { BrowserRouter as Router } from "react-router-dom";

// import { withStyles, Grid, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';

// import { HomeIcon } from '@material-ui/icons';

const App = props => {
  return (
    <Router>
      <React.Fragment>
        <TopNav />
        <Main />
        <BottomBar />
      </React.Fragment>
    </Router>
  );
}

export default App;

// <IconButton className={classes.menuButton} color="inherit" aria-label={t('ui.home')}>
//   <HomeIcon />
// </IconButton>
