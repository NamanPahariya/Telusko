// components/MovieCard.js
import React from "react";

const MovieCard = ({ movie, addToWishlist }) => {
  const movieImageURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-card">
      <img src={movieImageURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Release Year: {movie.release_date.split("-")[0]}</p>
        <button onClick={() => addToWishlist(movie)}>Add to Wishlist</button>
      </div>
    </div>
  );
};

export default MovieCard;
