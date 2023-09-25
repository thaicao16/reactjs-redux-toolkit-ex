import Box from "@mui/material/Box/Box";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../../api/movie/fetchMovieById";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../state/store";
import { Grid, Typography } from "@mui/material";
import { getMovie } from "../../state/feature/movie/movieItemSlice";

export default function MovieScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const { movieId } = useParams();
  const movieData = useSelector(getMovie);
  console.log("MovieScreen movieId= ", movieId);
  console.log("MovieScreen movieData= ", movieData);
  useEffect(() => {
    console.log("useEffect movieId= ", movieId);
    if (movieId) {
      dispatch(fetchMovieById(movieId));
    }
  }, [movieId]);

  return (
    <Box>
      {movieData.status === "loading" ? (
        <Box>Loading ...</Box>
      ) : (
        <>
          {movieData.movie && (
            <Grid
              container
              flexDirection={"row"}
              flexWrap="nowrap"
              sx={{
                gap: 8,
              }}
            >
              <Grid
                item
                sx={{
                  xs: 12,
                  sm: 12,
                  md: 4,
                  lg: 3,
                }}
              >
                <img
                  src={movieData.movie?.Poster}
                  alt={movieData.movie?.Title}
                />
              </Grid>
              <Grid
                item
                sx={{
                  xs: 12,
                  sm: 12,
                  md: 4,
                  lg: 3,
                }}
              >
                <Typography
                  align="left"
                  variant="h3"
                  component="h2"
                  gutterBottom
                >
                  {movieData.movie?.Title}
                </Typography>
                <Typography
                  align="left"
                  variant="h5"
                  component="h5"
                  gutterBottom
                >
                  Year: {movieData.movie?.Year}
                </Typography>
                <Typography
                  align="left"
                  variant="body1"
                  component="p"
                  gutterBottom
                >
                  {movieData?.Plot}
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  component="h6"
                  gutterBottom
                >
                  Director: {movieData.movie?.Director}
                </Typography>
              </Grid>
            </Grid>
          )}
        </>
      )}
    </Box>
  );
}
