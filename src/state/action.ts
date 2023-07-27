import { createAction } from "@reduxjs/toolkit";

export const getMoviesWithName = createAction("getMoviesWithName");
export const getMovie = createAction("getMovie");
export const setMovies = createAction("setMovies");
export const setMovie = createAction("setMovie");
export const apiLoading = createAction("api/Loading");
export const apiSuccess = createAction("api/Success");
export const apiFailed = createAction("api/Failed");
