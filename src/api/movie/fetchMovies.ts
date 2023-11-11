import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api";

export const fetchMovies = createAsyncThunk("", async (_movieName: String) => {
  const response = await axiosInstance.get("", {
    params: {
      s: _movieName,
    },
  });
  const data = response.data;
  console.log("fetchMovies: ", data);
  // Return result:
  return data;
});
