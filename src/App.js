import React from 'react';
import './App.scss';

import TopNav from './TopNav.js';
import Main from './Main.js';
import BottomBar from './BottomBar.js';

const App = props => {
  return (
    <div style={{background: 'linear-gradient(to bottom, #fff, #eee)'}}>
      <TopNav />
      <Main />
      <BottomBar />
    </div>
  );
}

export default App;
