import React from 'react';
import './SearchBox.css'

const SearchBox = ({ searchChange }) => {
  return (
    <div className='searchBoxDiv'>
      <input
        className='searchBox'
        type='search'
        placeholder='Search Pokemons'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;