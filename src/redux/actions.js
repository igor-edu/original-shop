export const increaseItemQuantity = (id) => {
  return {
    type: 'INCREASE_ITEM_QUANTITY',
    payload: id,
  };
};

export const decreaseItemQuantity = (id) => {
  return {
    type: 'DECREASE_ITEM_QUANTITY',
    payload: id,
  };
};

export const removeItemFromCart = (id) => {
  return {
    type: 'REMOVE_ITEM_FROM_CART',
    payload: id,
  };
};

export const addItemToCart = (id) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: id,
  };
};

export const removeItemFromWishlist = (id) => {
  return {
    type: 'REMOVE_ITEM_FROM_WISHLIST',
    payload: id,
  };
};

export const addItemToWishlist = (id) => {
  return {
    type: 'ADD_ITEM_TO_WISHLIST',
    payload: id,
  };
};

const actions = {
  increaseItemQuantity,
  decreaseItemQuantity,
  addItemToCart,
  addItemToWishlist,
  removeItemFromCart,
  removeItemFromWishlist,
};

export default actions;
