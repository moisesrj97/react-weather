import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = (props) => {
  const [location, setLocation] = useState('');

  const handleInputChange = (evt) => {
    setLocation(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleSearch(location);
  };

  return (
    <div className='Navbar'>
      <form className='search-form' onSubmit={handleSubmit}>
        <i className='fas fa-search'></i>
        <input
          className='search-bar'
          type='text'
          placeholder='Enter a location...'
          onChange={handleInputChange}
          value={location}
        ></input>
      </form>
    </div>
  );
};

export default Navbar;
