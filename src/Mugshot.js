import React, { Component } from 'react';

export default class Mugshot extends Component {
  render() {
    return (
      <div className='mugshot-container'>
        <div
          className='mugshot-frame'
          style={{
            background: `url(${this.props.path})`,
            backgroundSize: !this.props.scale ? 'cover' : this.props.scale * 300,
            backgroundClip: 'border-box',
            backgroundPosition: 'center'
          }}
          role='img'
          aria-label={this.props.alt}
        />
      </div>
    );
  }
}
