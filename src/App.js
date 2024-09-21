import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MovieCard from "./Components/MovieCard";
import Wishlist from "./Components/AddWishlist";
import { useDispatch } from "react-redux";
import "./styles.css";
import { movieApi } from "./Redux/API/api";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlist, setWishlist] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieApi())
      .unwrap()
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log("Error fetching movies:", error);
      });
  }, [dispatch]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToWishlist = (movie) => {
    if (!wishlist.find((item) => item.id === movie.id)) {
      setWishlist([...wishlist, movie]);
    }
  };

  const removeFromWishlist = (movieId) => {
    setWishlist(wishlist.filter((movie) => movie.id !== movieId));
  };

  return (
    <Router>
      <div className="app">
        <header className="navbar">
          <h1>Movie Finder</h1>
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to="/wishlist" className="wishlist-link">
            Wishlist ({wishlist.length})
          </Link>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <div className="content">
                <div className="movie-list">
                  {filteredMovies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      addToWishlist={addToWishlist}
                    />
                  ))}
                </div>
              </div>
            }
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlist={wishlist}
                removeFromWishlist={removeFromWishlist}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
