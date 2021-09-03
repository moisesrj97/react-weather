import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <form className='search-form'>
        <i class='fas fa-search'></i>
        <input
          class='search-bar'
          type='text'
          placeholder='Enter a location...'
        ></input>
      </form>
    </div>
  );
};

export default Navbar;
