import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api";

export const fetchMovieById = createAsyncThunk("", async (movieId: String) => {
  const response = await axiosInstance.get("", {
    params: {
      i: movieId,
    },
  });
  const data = response.data;
  console.log("fetchMovieById: ", data);
  return data;
});
