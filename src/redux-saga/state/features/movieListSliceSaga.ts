import { createSlice } from "@reduxjs/toolkit";
import { MovieSliceState } from "../../../state/feature/movie/movieTypes";

const initialState: MovieSliceState = {
  searchResult: {
    Search: [],
    totalResults: 0,
    Response: "False",
  },
  status: "idle",
};

const movieSliceSaga = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovies(...args) {}, // action creator
    setMovies: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export const { setMovies, getMovies } = movieSliceSaga.actions;
export default movieSliceSaga.reducer;
