import { createReducer } from "@reduxjs/toolkit";
import {
  initState,
  Movie,
  MovieSliceState,
  MovieState,
} from "./feature/movie/movieTypes";
import {
  getMoviesWithName,
  getMovie,
  setMovies,
  setMovie,
  apiLoading,
  apiSuccess,
  apiFailed,
} from "./action";

// const storeReducer = createReducer(initialState, {
//   getMoviesWithName: (state) => {},
//   getMovie: (state) => {},
//   setMovies: (state, action) => {
//     state.searchResult = action.payload;
//   },
//   setMovie: (state, action) => {
//     state.movie = action.payload;
//   },
// });

export const initMovieState: MovieState<Movie> = {
  loading: false,
  data: null,
  error: null,
};

const storeReducer = createReducer(initMovieState, (builder) => {
  builder
    .addCase(getMoviesWithName, (state, action) => {
      // action is inferred correctly here
    })
    // You can chain calls, or have separate `builder.addCase()` lines each time
    .addCase(getMovie, (state, action) => {})
    .addCase(setMovies, (state, action) => {
      //   state.searchResult = action.payload;
    })
    .addCase(setMovie, (state, action) => {
      //   state.movie = action.payload;
    })
    .addCase(apiLoading, (state) => {
      state.loading = true;
    })
    .addCase(apiSuccess, (state, action) => {
      // state.data = action.payload;
      state.loading = false;
    })
    .addCase(apiFailed, (state) => {
      state.loading = false;
    })
    // and provide a default case if no other handlers matched
    .addDefaultCase((state, action) => {});
});

export default storeReducer;
