import create from "zustand/index";
import { Movie } from "../state/feature/movie/movieTypes";

export interface MovieState {
  movies: Movie[];
  movie: Movie;
  fetchMovies: () => void;
  fetchMovieById: (id: string) => void;
}

const useStore = create((set) => ({
  count: 0,
  // addCount: () => set((state) => ({ count: state.count + 1 })),
  // subtractCount: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
