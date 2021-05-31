import React from 'react';
import { connect } from 'react-redux';

import ProductActions from '../components/ProductActions';
import ProductShippingInfo from '../components/ProductShippingInfo';
import Image from '../components/Image';
import RelatedProducts from '../components/RelatedProducts';
import SellingFeatures from '../components/SellingFeatures';

function ProductsIndividualPage(props) {
  const id = props.match.params.id;
  const product = props.products.find((product) => product.id === +id);

  return (
    <section className='products-individual-page'>
      <div className='container'>
        <div className='product-wrapper'>
          <Image src={product.imgSrc} alt={product.name} />

          <div className='product-details'>
            <h2>{product.name}</h2>
            <p className='product-price'>${product.price} USD</p>

            <h3>Product Details</h3>
            <p className='product-details-paragraph'>{product.details}</p>

            <h3>Shipping Info</h3>
            <div className='product-shipping-info'>
              <ProductShippingInfo
                feature='width'
                value={product.shipping.width}
              />
              <ProductShippingInfo
                feature='height'
                value={product.shipping.height}
              />
              <ProductShippingInfo
                feature='length'
                value={product.shipping.length}
              />
              <ProductShippingInfo
                feature='weight'
                value={product.shipping.weight}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <ProductActions product={product} dispatch={props.dispatch} />
      </div>

      <RelatedProducts ids={product.relatedProducts} />
      <SellingFeatures />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsIndividualPage);
