import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../../../api/movie/fetchMovies";
import { MovieSliceState } from "./movieTypes";

const initialState: MovieSliceState = {
  searchResult: {
    Search: [],
    totalResults: 0,
    Response: "False",
  },
  movie: null,
  status: "idle",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "idle";
        state.movie = action.payload;
      })

      .addCase(fetchMovies.rejected, (state) => {
        state.status = "idle";
      });
  },
});

export const {} = movieSlice.actions;
export const getMovie = (state: MovieSliceState) => state.movie;
export default movieSlice.reducer;
