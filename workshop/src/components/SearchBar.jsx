import React from 'react';

const SearchBar = ({ changeGifs }) => {
  const handleChange = (e) => {
    changeGifs(e.currentTarget.value);
  };

  return (
    <input
      type="text"
      className="form-search form-control"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
