import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

import './Navbar.scss';

const Navbar = (props) => {
  const [address, setAddress] = useState('');

  // Google api version
  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    setAddress(address);
    props.handleSearch(
      address.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    );
    setAddress('');
  };

  return (
    <div className='Navbar'>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <i className='fas fa-search'></i>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input search-bar',
              })}
            />
            <div className='autocomplete-dropdown-container'>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {})}
                    className='suggestion-item'
                    key={index}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default Navbar;
