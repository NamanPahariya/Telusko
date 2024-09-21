import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "8d55acaa1d3debe95becfee20d8a639f";

export const movieApi = createAsyncThunk("movieApi", async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );
  return response;
});
