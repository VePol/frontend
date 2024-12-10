import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import './styles.css';

const App = () => {
  const [movies, setMovies] = useState([]); // State to hold movies
  const [searchQuery, setSearchQuery] = useState(''); // To store the search query

  return (
    <div className="container mt-4">
      <h1 className="text-center">Movie Database</h1>
      <SearchBar setMovies={setMovies} setSearchQuery={setSearchQuery} /> {/* Pass setMovies to SearchBar */}
      <MovieList movies={movies} setMovies={setMovies} searchQuery={searchQuery} /> {/* Pass setMovies and searchQuery to MovieList */}
    </div>
  );
};

export default App;
