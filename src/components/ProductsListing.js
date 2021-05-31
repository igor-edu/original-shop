import React from 'react';
import SelectionLinks from './SelectionLinks';
import Selected from './Selected';

function ProductsListing() {
  return (
    <section className='products-listing'>
      <SelectionLinks />
      <Selected feature='all' />
    </section>
  );
}

export default ProductsListing;
