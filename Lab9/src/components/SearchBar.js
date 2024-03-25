// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ suggestions }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />
      {searchTerm && (
        <ul>
          {suggestions.filter(s => s.toLowerCase().includes(searchTerm.toLowerCase())).map(s => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
