import React from 'react';
import { movies } from '../data';

const renderMovies = () => {
  return movies.map(movie => {
    return (
      <div className="movie" key={movie.title}>
        <h2 className="h3">{movie.title}</h2>
        <p>Movie Time: {movie.time} min.</p>
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
      
  })
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
