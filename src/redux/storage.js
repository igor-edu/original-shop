import data from '../data';

export const getProductsFromStorage = () => {
  if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(data.products));
  }

  return JSON.parse(localStorage.getItem('products'));
};

export const setProductsInStorage = (products) => {
  localStorage.setItem('products', JSON.stringify(products));
};
