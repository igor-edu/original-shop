import { getProductsFromStorage, setProductsInStorage } from './storage';

const reducer = (state = getProductsFromStorage(), action) => {
  let newState;

  switch (action.type) {
    case 'INCREASE_ITEM_QUANTITY':
      newState = state.map((product) => {
        if (product.id === action.payload)
          return { ...product, quantity: product.quantity + 1 };
        else return { ...product };
      });
      break;

    case 'DECREASE_ITEM_QUANTITY':
      newState = state.map((product) => {
        if (product.id === action.payload)
          return { ...product, quantity: Math.max(product.quantity - 1, 0) };
        else return { ...product };
      });
      break;

    case 'REMOVE_ITEM_FROM_CART':
      newState = state.map((product) => {
        if (product.id === action.payload)
          return { ...product, quantity: 0, inCart: false };
        else return { ...product };
      });
      break;

    case 'ADD_ITEM_TO_CART':
      newState = state.map((product) => {
        if (product.id === action.payload)
          return { ...product, quantity: 1, inCart: true };
        else return { ...product };
      });
      break;

    case 'REMOVE_ITEM_FROM_WISHLIST':
      newState = state.map((product) => {
        if (product.id === action.payload)
          return { ...product, inWishlist: false };
        else return { ...product };
      });
      break;

    case 'ADD_ITEM_TO_WISHLIST':
      newState = state.map((product) => {
        if (product.id === action.payload)
          return { ...product, inWishlist: true };
        else return { ...product };
      });
      break;

    default:
      newState = state;
  }

  setProductsInStorage(newState);
  return newState;
};

export default reducer;
