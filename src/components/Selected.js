import React from 'react';
import data from '../data';
import Product from './Product';

export default function Selected(props) {
  let selectedProducts;

  if (props.feature === 'all') {
    selectedProducts = data.products.map((product) => (
      <Product id={product.id} key={product.id} />
    ));
  } else {
    selectedProducts = data.products
      .filter((product) => product.features.includes(props.feature))
      .map((product) => <Product id={product.id} key={product.id} />);
  }

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  if (selectedProducts.length === 0)
    return (
      <section className='selected'>
        <div className='container'>
          <h2>
            <span>{capitalize(props.feature)} Products</span>
          </h2>
          <h3>No {capitalize(props.feature)} Products at this time</h3>
        </div>
      </section>
    );

  return (
    <section className='selected'>
      <div className='container'>
        <h2>
          <span>{capitalize(props.feature)} Products</span>
        </h2>
        <div className='selected-products'>{selectedProducts}</div>
      </div>
    </section>
  );
}
