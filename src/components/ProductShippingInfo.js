import React from 'react';

function ProductShippingInfo({ feature, value }) {
  return (
    <div className={feature}>
      <p>{feature}:</p>
      <p>{value}</p>
    </div>
  );
}

export default ProductShippingInfo;
