import React from 'react';

function Store({ city, address, postCode }) {
  return (
    <div className='store'>
      <h3>{city}</h3>
      <p>{address}</p>
      <p>{postCode}</p>
    </div>
  );
}

export default Store;
