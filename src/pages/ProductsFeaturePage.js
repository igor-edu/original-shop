import React from 'react';
import Selected from '../components/Selected';
import Header from '../components/Header';
import SelectionLinks from '../components/SelectionLinks';

function ProductsFeatures(props) {
  const feature = props.match.params.feature;
  const features = ['all', 'new', 'trending', 'popular'];

  if (features.includes(feature))
    return (
      <div className='products-features-page'>
        <Header h1text='Shop Collection' />
        <SelectionLinks />
        <Selected feature={feature} />;
      </div>
    );

  return null;
}

export default ProductsFeatures;
