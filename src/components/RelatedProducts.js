import React from 'react';
import data from '../data';
import Product from './Product';

function RelatedProducts(props) {
  const relatedProducts = props.ids.map((id) =>
    data.products.find((product) => product.id === +id)
  );

  if (relatedProducts.length === 0)
    return <h2>No Related Products for this item...</h2>;

  return (
    <section className='related-products'>
      <div className='container'>
        <h2>
          <span>Related Products</span>
        </h2>
        <div className='products-wrapper'>
          {relatedProducts.map((product) => (
            <Product id={product.id} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;
