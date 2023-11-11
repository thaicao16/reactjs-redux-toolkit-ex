import { takeLatest, put, call, fork } from "redux-saga/effects";
import { fetchMovie, fetchMovies } from "../../api/api";
import { getMovie, setMovie } from "./features/movieItemSliceSaga";
import { getMovies, setMovies } from "./features/movieListSliceSaga";

function* onLoadMoviesAsync(action: { type: string; payload: string }): any {
  try {
    const movieName = action.payload;
    const response = yield call(fetchMovies, movieName);
    if (response.status === 200) {
      yield put(setMovies(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovieAsync(action: { type: string; payload: string }): any {
  try {
    const movieId = action.payload;
    const response = yield call(fetchMovie, movieId);
    if (response.status === 200) {
      console.log(response.data);
      yield put(setMovie(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

function* onLoadMovie() {
  yield takeLatest(getMovie.type, onLoadMovieAsync);
}

const moviesSagas = [fork(onLoadMovies), fork(onLoadMovie)];

export default moviesSagas;
