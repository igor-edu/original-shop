import React from 'react';
import {
  removeItemFromCart,
  addItemToCart,
  removeItemFromWishlist,
  addItemToWishlist,
} from '../redux/actions';
import { Link } from 'react-router-dom';

function ProductActions({ product, dispatch }) {
  return (
    <div className='actions'>
      {product.inCart ? (
        <button onClick={() => dispatch(removeItemFromCart(product.id))}>
          remove from basket
        </button>
      ) : (
        <button onClick={() => dispatch(addItemToCart(product.id))}>
          add to basket
        </button>
      )}

      {product.inWishlist ? (
        <button onClick={() => dispatch(removeItemFromWishlist(product.id))}>
          remove from wishlist
        </button>
      ) : (
        <button onClick={() => dispatch(addItemToWishlist(product.id))}>
          add to wishlist
        </button>
      )}

      <Link to='/products/features/all'>
        <button className='shop-all-products' href='/'>
          back to all products
        </button>
      </Link>
    </div>
  );
}

export default ProductActions;
