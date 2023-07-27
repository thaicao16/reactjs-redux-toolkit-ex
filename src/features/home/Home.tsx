import Box from "@mui/material/Box/Box";
import MovieList from "../../components/MovieList";
import Search from "../../components/Search";
import { fetchMovies } from "../../api/movie/fetchMovies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";

export default function HomeScreen() {
  console.log("HomeScreen= ");
  const dispatch = useDispatch<AppDispatch>();

  const onSearchDataValue = (searchData: string) => {
    console.log("onSearchDataValue= ", searchData);
  };

  useEffect(() => {
    console.log("HomeScreen fetchMovies");
    dispatch(fetchMovies("spider"));
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Search
        onSearchData={(searchValue) => onSearchDataValue(searchValue)}
        placeHolder="Search here"
      />
      <MovieList />
    </Box>
  );
}
