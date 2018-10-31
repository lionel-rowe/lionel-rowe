import React, { Component } from 'react';
import './App.scss';
import * as data from './en_US.json'
import Mugshot from './Mugshot.js';
import Timeline from './Timeline.js';
import SkillsSection from './SkillsSection.js';
import Contact from './Contact.js';

/***********************

fas:


fas fa-filter


***********************/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#intro">{data.fullName}</a>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#timeline">Timeline</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <div className='container-fluid'>

          <main>

          <div className='row'>
            <div className='col-sm'>
              <h1 id='intro'>{data.fullName}</h1>
              <Mugshot path='images/lionel.jpg' />
              <p>{data.missionStatement}</p>
            </div>
          </div>

          <Timeline />

          <SkillsSection />

          <Contact />

          </main>
        </div>
      </div>
    );
  }
}

export default App;
