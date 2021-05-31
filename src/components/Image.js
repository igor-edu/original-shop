import React from 'react';

function Image({ src, alt }) {
  return (
    <div className='image-wrapper'>
      <img src={src} alt={alt} />
    </div>
  );
}

export default Image;
