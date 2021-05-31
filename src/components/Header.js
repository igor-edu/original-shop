import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className='header'>
      <h4>{props.h4text}</h4>
      <h1>{props.h1text}</h1>
      {props.buttontext ? (
        <Link to='/products/features/all'>
          <button>{props.buttontext}</button>
        </Link>
      ) : null}
    </header>
  );
}
