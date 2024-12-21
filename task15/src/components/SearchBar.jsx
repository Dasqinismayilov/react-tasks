import React from 'react';
import './style.css';
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Axtarış..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
