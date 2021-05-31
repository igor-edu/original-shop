import React from 'react';
import actions from '../redux/actions';

function IndividualProductWishlist({ product, dispatch }) {
  return (
    <div className='individual-product-wishlist' key={product.id}>
      <div className='image-wrapper'>
        <img src={product.imgSrc} alt={product.name} />
      </div>
      <div className='content-wrapper'>
        <h3 className='product-name'>{product.name}</h3>
        <p className='product-price'>
          Individual item price: <span>${product.price}</span>
        </p>
        <button
          className='remove-from-wishlist'
          onClick={() => dispatch(actions.removeItemFromWishlist(product.id))}
        >
          remove from wishlist
        </button>
        <button
          className='move-to-basket'
          onClick={() => {
            dispatch(actions.removeItemFromWishlist(product.id));
            dispatch(actions.addItemToCart(product.id));
          }}
        >
          move to basket
        </button>
      </div>
    </div>
  );
}

export default IndividualProductWishlist;
