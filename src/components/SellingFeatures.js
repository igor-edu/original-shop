import React from 'react';
import SellingFeature from './SellingFeature';

function SellingFeatures() {
  return (
    <section className='selling-features'>
      <div className='container'>
        <SellingFeature
          imgSrc='https://image.flaticon.com/icons/svg/942/942196.svg'
          heading='free shipping'
          paragraph='Free shipping on all orders over $99'
        />
        <SellingFeature
          imgSrc='https://image.flaticon.com/icons/svg/2897/2897894.svg'
          heading='money back guarantee'
          paragraph='100% money back guarantee'
        />
        <SellingFeature
          imgSrc='https://image.flaticon.com/icons/svg/868/868171.svg'
          heading='online support'
          paragraph='High customer satisfaction'
        />
      </div>
    </section>
  );
}

export default SellingFeatures;
