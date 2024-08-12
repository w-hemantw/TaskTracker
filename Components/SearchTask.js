import React, { useState } from 'react';

const SearchTask = ({ searchQuery, setSearchQuery }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        className={`transition-all duration-300 ease-in-out pl-10 py-2 text-xl border-2 border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          isFocused ? 'w-64' : 'w-10'
        }`}
        placeholder={isFocused ? 'Search Task' : ''}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="absolute left-3 pointer-events-none text-xl">🔍</div>
    </div>
  );
};

export default SearchTask;
