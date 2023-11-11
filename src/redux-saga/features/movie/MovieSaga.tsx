import Box from "@mui/material/Box/Box";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { AppDispatch } from "../../../state/store";
import { RootState } from "../../state/sagaStore";
import { getMovie } from "../../state/features/movieItemSliceSaga";

export default function Movie() {
  const dispatch = useDispatch<AppDispatch>();
  const { movieId } = useParams();
  const movieData = useSelector((state: RootState) => state.movie);
  console.log("MovieSaga movieId= ", movieId);
  console.log("MovieSaga movieData= ", movieData);
  useEffect(() => {
    console.log("MovieSaga useEffect movieId= ", movieId);
    if (movieId) {
      dispatch(getMovie(movieId));
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
                  {movieData.movie?.Plot}
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
