import React from "react";
import "./Wishlist.css";

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      {wishlist.length > 0 ? (
        <table className="wishlist-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Release Date</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.release_date}</td>
                <td>{movie.vote_average}</td>
                <td>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromWishlist(movie.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
