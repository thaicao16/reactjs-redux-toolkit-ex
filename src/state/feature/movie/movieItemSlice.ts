import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieById } from "../../../api/movie/fetchMovieById";
import { MovieItemSliceState } from "./movieTypes";

const initialState: MovieItemSliceState = {
  movie: null,
  status: "idle",
};

export const movieItemSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.status = "idle";

        state.movie = action.payload;
        console.log("fetchMovieById fulfilled= ", action.payload);
        console.log("fetchMovieById state= ", state);
      })

      .addCase(fetchMovieById.rejected, (state) => {
        state.status = "idle";
      });
  },
});

export const {} = movieItemSlice.actions;
export const getMovie = (state: any) => state.movieData;
export default movieItemSlice.reducer;
