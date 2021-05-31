import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmptyWishlist from '../components/EmptyWishlist';
import IndividualProductWishlist from '../components/IndividualProductWishlist';

export class WishlistPage extends Component {
  render() {
    const productsInWishlist = this.props.products.filter(
      (product) => product.inWishlist
    );

    if (productsInWishlist.length === 0) return <EmptyWishlist />;

    const renderedProducts = productsInWishlist.map((product) => (
      <IndividualProductWishlist
        key={product.id}
        product={product}
        dispatch={this.props.dispatch}
      />
    ));

    return (
      <section className='wishlist'>
        <div className='container'>
          <h2>Your Wishlist</h2>
          {renderedProducts}
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

export default connect(mapStateToProps, mapDispatchToProps)(WishlistPage);
