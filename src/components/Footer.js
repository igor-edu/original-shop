import React from 'react';

function Footer() {
  return (
    <footer>
      <div className='footer-brand'>
        <p>furnilux.</p>
      </div>
      <div className='footer-content'>
        <p className='footer-content-first'>
          Designed by <span className='footer-design'>@HappyDesigner</span>
        </p>
        <p className='footer-content-second'>
          Powered by <span className='footer-design'>furnilux.</span> &#169;2020
        </p>
      </div>
    </footer>
  );
}

export default Footer;
