import Box from "@mui/material/Box/Box";
import { AsyncThunkAction, Dispatch, AnyAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { fetchMovies } from "../../api/movie/fetchMovies";

export default function MovieScreen() {
  useEffect(() => {
    console.log("MovieScreen fetchMovies");
    dispatch(fetchMovies("batman"));
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      Movie Page
    </Box>
  );
}
function dispatch(
  arg0: AsyncThunkAction<
    any,
    String,
    {
      state?: unknown;
      dispatch?: Dispatch<AnyAction> | undefined;
      extra?: unknown;
      rejectValue?: unknown;
      serializedErrorType?: unknown;
      pendingMeta?: unknown;
      fulfilledMeta?: unknown;
      rejectedMeta?: unknown;
    }
  >
) {
  throw new Error("Function not implemented.");
}
