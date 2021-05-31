import React from 'react';

function SellingFeature(props) {
  return (
    <div className='selling-feature'>
      <img src={props.imgSrc} alt={props.heading} />
      <h3>{props.heading}</h3>
      <p>{props.paragraph}</p>
    </div>
  );
}

export default SellingFeature;
