import React from "react";
import { createRoot } from "react-dom/client";
// import HomePage from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import sample from "./stories/sampleData";
import { MovieImage } from "./types/interfaces";

// const movies = [sample, sample, sample, sample, sample, sample, sample];

const images: MovieImage[] = [
  { file_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg" },
  { file_path: "/v1QQKq8M0fWxMgSdGOX1aCv8qMB.jpg" },
  { file_path: "/2iGN0aKHJYD0xQydlfuCUAcgNbO.jpg" },
  { file_path: "/rjBwhsOzHKUw2NIOrE7aMqjfe6s.jpg" },
];

const App = () => {
  //   return <HomePage movies={movies} />;
  return <MovieDetailsPage movie={sample} images={images} />;
};

const rootElement = createRoot(document.getElementById("root")!);
rootElement.render(<App />);
