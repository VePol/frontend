import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">
          {movie.title} <span className="text-muted">({movie.year})</span>
        </h5>
        <p className="card-text">
          <strong>Genres:</strong> {movie.genres || 'N/A'}
        </p>
        <p className="card-text">
          <strong>Directors:</strong> {movie.directors || 'N/A'}
        </p>
        <p className="card-text">
          <strong>Cast:</strong> {movie.cast || 'N/A'}
        </p>
        <p className="card-text">
          <strong>Plot:</strong> {movie.plot || 'Plot not available.'}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;

