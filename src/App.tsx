import React, { useMemo } from "react";
import HomeScreen from "./features/home/Home";
import "./App.css";
import Movie from "./features/movie/Movie";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/movie/:movieId" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
