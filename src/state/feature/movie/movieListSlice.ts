import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../../../api/movie/fetchMovies";
import { MovieSliceState } from "./movieTypes";

const initialState: MovieSliceState = {
  searchResult: {
    Search: [],
    totalResults: 0,
    Response: "False",
  },
  status: "idle",
};

export const movieListSlice = createSlice({
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
        console.log("fetchMovies fulfilled= ", action.payload);
        state.searchResult = action.payload;
      })

      .addCase(fetchMovies.rejected, (state) => {
        state.status = "idle";
      });
  },
});

export const {} = movieListSlice.actions;
export const getMovies = (state: any) => state.movieListData;
export default movieListSlice.reducer;
