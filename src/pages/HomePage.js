import React from 'react';
import Header from '../components/Header';
import Selected from '../components/Selected';
import Testimonial from '../components/Testimonial';
import SellingFeatures from '../components/SellingFeatures';

function Home() {
  return (
    <section className='home-page'>
      <Header
        h4text='money back guarantee'
        h1text='a modern furniture on furnilux marketplace'
        buttontext='view our products'
      />
      <Selected feature='new' />
      <Selected feature='trending' />
      <Selected feature='popular' />
      <Testimonial />
      <SellingFeatures />
    </section>
  );
}

export default Home;
