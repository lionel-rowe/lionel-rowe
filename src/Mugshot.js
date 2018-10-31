import React, { Component } from 'react';

export default class Mugshot extends Component {
  render() {
    return (
      <div className='mugshot-container'>
        <img src='images/lionel.jpg' className='mugshot' alt='Lionel Rowe mugshot' />
        <div className='mugshot-frame' />
      </div>
    );
  }
}
