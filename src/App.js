import React, { Component } from 'react';
import './App.scss';
import * as data from './en_US.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Lionel Roweʼs CV</a>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#intro">Intro <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#history">History</a>
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

            <h1 id='intro'>{data.fullName}</h1>
            <img src='images/lionel.jpg' className='mugshot' alt='Lionel Rowe mugshot' />
            <p>{data.missionStatement}</p>
            {/*<i className="fas fa-filter"></i>*/}

            <div className='row'>
              <div className='col-sm'>
                <h2 id='history'>History</h2>
                <p>..</p>
              </div>
            </div>

            <div className='row'>
              <div className='col-sm'>
                <h2 id='skills'>Skills</h2>
                <p>..</p>
              </div>
            </div>

            <div className='row'>
              <div className='col-sm'>
                <h2 id='contact'>Contact</h2>
                <p>..</p>
              </div>
            </div>

          </main>
        </div>
      </div>
    );
  }
}

export default App;
