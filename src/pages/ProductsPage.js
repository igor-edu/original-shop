import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SelectionLinks from '../components/SelectionLinks';

function ProductsPage() {
  return (
    <div>
      <Navbar />
      <Header h1text='Shop Collection' />
      <SelectionLinks />
    </div>
  );
}

export default ProductsPage;
