import React, { Component } from 'react';
import { connect } from 'react-redux';

import IndividualProductCart from '../components/IndividualProductCart';

export class CartPage extends Component {
  render() {
    const productsInCart = this.props.products.filter(
      (product) => product.inCart
    );
    const renderedProducts = productsInCart.map((product) => (
      <IndividualProductCart
        key={product.id}
        product={product}
        dispatch={this.props.dispatch}
      />
    ));

    return (
      <section className='cart'>
        <div className='container'>
          <h2>Shopping Cart</h2>
          <p className='price'>
            <span>Price</span>
          </p>
          {renderedProducts}
          <p className='subtotal'>
            Subtotal (
            <span className='number-of-items'>
              {this.props.products.reduce(
                (acc, product) => acc + product.quantity,
                0
              )}
            </span>{' '}
            items): $
            <span className='subtotal-price'>
              {this.props.products
                .reduce(
                  (acc, product) => acc + product.quantity * product.price,
                  0
                )
                .toFixed(2)}
            </span>
          </p>
        </div>
      </section>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
