import React from 'react';

import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Map from '../components/Map';
import Store from '../components/Store';
import Form from '../components/Form';

function AboutPage() {
  return (
    <section className='about-page'>
      <Header h1text='About Us' />
      <div className='container'>
        <AboutUs />
        <Map />
        <div className='vertical-spacer'></div>

        <div className='our-stores'>
          <h2>
            <span>Our Stores</span>
          </h2>
          <div className='stores'>
            <Store
              city='Melbourne'
              address='123 Sixth St'
              postCode='Melbourne, FL 32904'
            />
            <Store
              city='London'
              address='44 Shirley Ave'
              postCode='London, EN 60185'
            />
            <Store
              city='New York'
              address='514 South Magnolia St'
              postCode='Manhattan, NY 32806'
            />
          </div>
        </div>

        <div className='write-to-us'>
          <h2>
            <span>Write to us</span>
          </h2>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
