import Box from "@mui/material/Box/Box";
import MovieList from "../../components/MovieListSaga";
import Search from "../../components/SearchSaga";

export default function HomeScreen() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Search placeHolder="Search here" />
      <MovieList />
    </Box>
  );
}
