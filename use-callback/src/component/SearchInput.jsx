import React from 'react';

const SearchInput = ({ onChange }) => {
  console.log("SearchInput re-rendered");
  
  return (
    <div>
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search users..."
      />
    </div>
  );
};

export default SearchInput;
