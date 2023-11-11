import { Card, CardContent, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies } from "../../redux-saga/state/features/movieListSliceSaga";
import { Movie } from "../../state/feature/movie/movieTypes";
import { RootState } from "../state/sagaStore";

export default function MovieList() {
  const movieData = useSelector((state: RootState) => state.movieList);
  const movieDataList = movieData.searchResult.Search;
  console.log("MovieList movieData= ", movieData);
  console.log("MovieList movieDataList= ", movieDataList);
  return (
    <Box>
      {movieData.status === "loading" ? (
        <Box>Loading ...</Box>
      ) : (
        <Box>
          <Grid
            container
            spacing={0}
            sx={{ mb: 0, mt: 1.5, borderTop: "1px solid #4c4c4c" }}
          >
            {movieDataList?.map((movie: Movie) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>
                  <Box>
                    <Card
                      sx={{
                        display: "flex",
                        borderRadius: "8px",
                        p: "12px",
                        m: "8px",
                      }}
                    >
                      <img
                        src={`${movie.Poster}`}
                        srcSet={`${movie.Poster}`}
                        width="135px"
                        height="240px"
                        alt={movie.Title}
                        loading="lazy"
                      />

                      <CardContent
                        sx={{
                          m: 0,
                          p: 0.5,
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="h6"
                          title={movie.Title}
                          sx={{
                            textAlign: "left",
                          }}
                        >
                          {movie.Title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {movie.Year}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
