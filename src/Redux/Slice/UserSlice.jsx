import { createSlice } from "@reduxjs/toolkit";
import { movieApi } from "../API/api";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(movieApi.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(movieApi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(movieApi.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
