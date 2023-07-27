export interface Movie {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}
export interface MoviesResponseType {
  Search: Movie[];
  totalResults: number;
  Response: string;
}

export interface MovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: "True" | "False";
}

export interface MovieSliceState {
  searchResult: MoviesResponseType;
  movie: MovieDetails | null;
  status: "idle" | "loading";
}

export type MovieState<T> = {
  // In `status` we will watch
  // if todos are being loaded.
  // status: "loading" | "idle";
  loading: boolean;

  // `error` will contain an error message.
  error: string | null;
  data: T | null;
};

export interface Action<T> {
  type: string;
  data?: T | null;
  notifyMessage?: string | null;
  error?: string | null;
}
export interface State<T> {
  loading: boolean;
  data: T | null;
  notifyMessage?: string | null;
  error: string | null;
}
export const initState = {
  loading: false,
  data: null,
  error: null,
  notifyMessage: null,
};
