import React, { useState } from 'react';

const SearchBar = ({ setMovies, setSearchQuery }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query) {
      setSearchQuery(query); // Set the search query in the parent component
      setMovies([]); // Optionally clear the movie list until search results come in
    } else {
      setSearchQuery(''); // Clear the search query if empty
      setMovies([]); // Optionally reset the movie list
    }
  };

  const handleReset = () => {
    setQuery(''); // Reset the search input field
    setSearchQuery(''); // Clear the search query in the parent component
    setMovies([]); // Optionally reset the movie list
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search for a movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-2">Search</button>
      <button type="button" className="btn btn-secondary mt-2" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default SearchBar;
