import React from 'react';

import actions from '../redux/actions';

function ProductPrice({ product, dispatch }) {
  return (
    <p className='product-price'>
      Price:
      <span className='product-price-span'>${product.price}</span>
      <button
        className='decrease'
        onClick={() => dispatch(actions.decreaseItemQuantity(product.id))}
      >
        -
      </button>
      <span className='product-quantity'>{product.quantity}</span>
      <button
        className='increase'
        onClick={() => dispatch(actions.increaseItemQuantity(product.id))}
      >
        +
      </button>
      <span className='item-total'>
        ${(product.price * product.quantity).toFixed(2)}
      </span>
    </p>
  );
}

export default ProductPrice;
