import React, { useState, useEffect } from 'react'; // Importing useState and useEffect hooks from React
import { getMovies } from '../api'; // Assuming the API function is correctly defined
import MovieCard from './MovieCard';
import Pagination from './Pagination';

const MovieList = ({ movies, setMovies, searchQuery }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalMovies, setTotalMovies] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies(page, pageSize, searchQuery); // Fetch movies based on searchQuery
      setMovies(data.movies); // Set the movies data
      setTotalMovies(data.count); // Set total count for pagination
    };
    fetchMovies(); // Run when page, pageSize, or searchQuery changes
  }, [page, pageSize, searchQuery, setMovies]); // Adding setMovies here ensures that we don't miss it.

  return (
    <div>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4" key={movie.title}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      <Pagination
        totalMovies={totalMovies}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default MovieList;
