import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className='nav'>
        <div className='container'>
          <div className='nav-brand'>
            <p>furnilux.</p>
          </div>

          <div className='nav-links'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/products/features/all'>Products</Link>
              </li>
            </ul>
          </div>

          <Link to='/cart' className='nav-cart'>
            <div className='nav-cart-icon'>
              <svg
                className='bi bi-cart'
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'
                />
              </svg>
            </div>
            <div className='nav-cart-title'>cart</div>
            <div className='nav-cart-counter'>
              {this.props.products.reduce(
                (acc, product) => acc + product.inCart,
                0
              )}
            </div>
          </Link>

          <Link to='/wishlist' className='nav-wishlist'>
            <div className='nav-wishlist-icon'>
              <svg
                className='bi bi-heart'
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z'
                />
              </svg>
            </div>
            <div className='nav-wishlist-title'>wishlist</div>
            <div className='nav-wishlist-counter'>
              {this.props.products.reduce(
                (acc, product) => acc + product.inWishlist,
                0
              )}
            </div>
          </Link>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state,
  };
};

export default connect(mapStateToProps)(Navbar);
