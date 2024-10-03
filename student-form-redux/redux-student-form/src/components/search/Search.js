import React from 'react';

function Search({ filter, onInputChange }) {
  return (
    <div>
      <label>Search by Reg Number:</label>
      <input
        type="search"
        value={filter}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Enter part of Reg Number"
      />
    </div>
  );
}

export default Search;
