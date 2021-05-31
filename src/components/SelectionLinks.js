import React from 'react';
import { Link } from 'react-router-dom';

function SelectionLinks() {
  return (
    <section className='selection-links'>
      <h3>Shop By Features</h3>
      <div className='links-container'>
        <Link to='/products/features/all'>all</Link>
        <Link to='/products/features/new'>new</Link>
        <Link to='/products/features/trending'>trending</Link>
        <Link to='/products/features/popular'>popular</Link>
      </div>
    </section>
  );
}

export default SelectionLinks;
