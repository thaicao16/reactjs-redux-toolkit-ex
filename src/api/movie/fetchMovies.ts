import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api";

export const fetchMovies = createAsyncThunk("", async (_movieName: String) => {
  // Fetch the backend endpoint:
  //   const response = await fetch(
  //     `https://jsonplaceholder.typicode.com/todos`
  //   );

  // Get the JSON from the response:
  //   const data = await response.json();

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

// export const fetchMovies = createAsyncThunk("",   async (_movieName) => {
//   const response = await new Promise((resolve) =>
//     setTimeout(() => resolve({ data: {id: new Date().getTime(), name: task.name, listId: task.listId} }), 100)
//   );
//   return response.data;
// });

//   export const fetchMovies = async (movieName: string) => {
//     return axiosInstance.get("", {
//       params: {
//         s: movieName,
//       },
//     });
//   };
