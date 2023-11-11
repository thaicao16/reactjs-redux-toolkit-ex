import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import storeReducer from "./movieReducer";
import movieListReducer from "./feature/movie/movieListSlice";
import movieItemReducer from "./feature/movie/movieItemSlice";

const store = configureStore({
  reducer: {
    movieListData: movieListReducer,
    movieData: movieItemReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
