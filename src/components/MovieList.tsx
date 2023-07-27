import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import { Movie } from "../state/feature/movie/movieTypes";

export default function MovieList() {
  const moviesList: Movie[] = [];
  return (
    <Box>
      {moviesList.map((movie) => (
        <Box key={movie.imdbID}>
          <Card
            sx={{
              display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
              borderRadius: "8px",
              p: "12px",
              mb: "12px",
            }}
          >
            <CardMedia
              component="img"
              width="135px"
              height="240px"
              image={movie.Poster}
              alt={movie.Title}
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h5"
                sx={{
                  width: "100%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                title={movie.Title}
              >
                {movie.Title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.Year}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
