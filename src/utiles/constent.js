// src/utiles/constants.js

export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const TMDB_ORIGINAL_IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const NOW_PLAYING_URL = `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`;

export const TRENDING_URL = `${TMDB_BASE_URL}/trending/movie/day?api_key=${TMDB_API_KEY}`;

export const TOP_RATED_URL = `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`;

export const POPULAR_URL = `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;

export const UPCOMING_URL = `${TMDB_BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`;

export const TMDB_API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyNDI5YWQ2OWY1ZDY1YzY3NTBmNjJiNTk1MmQ4YjBjZSIsIm5iZiI6MTc1NTEzNjM2Mi43NTgsInN1YiI6IjY4N2JlMzkyZTE3ODJkNGRkMjgzYTBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ'
  }
};

