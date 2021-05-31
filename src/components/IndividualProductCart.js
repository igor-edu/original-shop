import React from 'react';
import actions from '../redux/actions';
import Image from './Image';
import ProductPrice from './ProductPrice';

function IndividualProductCart({ product, dispatch }) {
  return (
    <div className='individual-product-cart'>
      <Image src={product.imgSrc} alt={product.name} />

      <div className='content-wrapper'>
        <h3 className='product-name'>{product.name}</h3>

        <ProductPrice product={product} dispatch={dispatch} />

        <button
          className='remove-from-basket'
          onClick={() => dispatch(actions.removeItemFromCart(product.id))}
        >
          remove from basket
        </button>

        <button
          className='move-to-wishlist'
          onClick={() => {
            dispatch(actions.removeItemFromCart(product.id));
            dispatch(actions.addItemToWishlist(product.id));
          }}
        >
          move to wishlist
        </button>
      </div>
    </div>
  );
}

export default IndividualProductCart;
