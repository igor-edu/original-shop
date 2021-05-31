import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function Product(props) {
  const product = data.products.find((product) => product.id === +props.id);

  return (
    <div className='product'>
      <div className='image-wrapper'>
        <img src={product.imgSrc} alt={product.name} />
        <span>{product.features.join(' ')}</span>
      </div>
      <h3>{product.name}</h3>
      <p className='product-price'>
        $<span>{product.price.toFixed(2)}</span> USD
      </p>
      <p className='product-link'>
        <Link to={`/products/individual/${product.id}`}>view details</Link>
      </p>
    </div>
  );
}

export default Product;
