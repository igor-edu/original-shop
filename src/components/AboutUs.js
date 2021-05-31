import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className='about'>
      <h2>
        <span>Why us</span>
      </h2>
      <p>We are founded hundred years ago. And still surviving...</p>
      <p>
        Shopping with us is bringing quality to your home. Our after sale
        service is among the best in the industry. Try and see...for yourself...
      </p>
      <Link to='/products/features/all'>
        <button>shop our products</button>
      </Link>
    </div>
  );
}

export default AboutUs;
