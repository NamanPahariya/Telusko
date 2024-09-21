# Movie Website

## Overview

This is a simple movie website built using **React**, designed to display movie information in the form of cards. Each movie card includes the **movie poster**, **title**, and **release year**. Users can search for specific movies and manage their own wishlist, where they can add or remove favorite movies.

## Features

- **Movie Card Display**: Movies are displayed in a grid format, with each card containing the following:
  - Poster Image
  - Title
  - Release Year
- **Search Functionality**: Allows users to search for movies by title. The search bar filters the movies dynamically as users type.
- **Wishlist Management**: Users can add movies to their wishlist by clicking the 'Add to Wishlist' button on the movie card. The wishlist is accessible through the navbar.
  - Add to Wishlist
  - Remove from Wishlist

## Technology Stack

- **React**: JavaScript library used for building user interfaces.
- **Axios**: For making HTTP requests to the movie API.
- **Redux**: For state management (handling movie data, search results, and wishlist).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NamanPahariya/Telusko.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Movie API

The movie data is fetched from a movie API using **Axios**. Make sure to replace the API URL and API key (if required) in the code.

## Redux for State Management

The app uses **Redux** to manage the application state. The state includes:

- Movie Data: The list of movies fetched from the API.
- Search Results: The filtered list of movies based on user input in the search bar.
- Wishlist: The list of movies added to the user's wishlist.

## Wishlist Component

The wishlist component is integrated into the **navbar**, allowing users to quickly access their saved movies. Users can also remove movies from the wishlist directly.

## Thank you

## License

This project is licensed under the Naman Pahariya.
