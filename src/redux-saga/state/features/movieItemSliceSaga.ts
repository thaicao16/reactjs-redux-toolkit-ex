import { createSlice } from "@reduxjs/toolkit";
import { MovieItemSliceState } from "../../../state/feature/movie/movieTypes";

const initialState: MovieItemSliceState = {
  status: "idle",
  movie: null,
};

const movieSliceSaga = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovie(...args) {}, // action creator
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { getMovie, setMovie } = movieSliceSaga.actions;
export default movieSliceSaga.reducer;
