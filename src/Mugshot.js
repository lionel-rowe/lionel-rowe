import React from 'react';

const Mugshot = props => {

  const { path, scale, alt } = props;

  return (
    <div className='mugshot-container'>
      <div
        className='mugshot-frame'
        style={{
          background: `url(${path})`,
          backgroundSize: !scale ? 'cover' : scale * 250,
          backgroundClip: 'border-box',
          backgroundPosition: 'center'
        }}
        role='img'
        aria-label={alt}
      />
    </div>
  );
}

export default Mugshot;
