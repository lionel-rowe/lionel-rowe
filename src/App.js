import React from 'react';
import './App.scss';

import TopNav from './TopNav';
import Main from './Main';
import BottomBar from './BottomBar';

const App = props => {
  return (
    <React.Fragment>
      <div
        id='background'
        style={{
          background: 'linear-gradient(to bottom, #fff, #eee)',
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0, bottom: 0, left: 0, right: 0,
          zIndex: -1
        }}
      />
      <div id='foreground'>
        <TopNav />
        <Main />
        <BottomBar />
      </div>
    </React.Fragment>
  );
}

export default App;
