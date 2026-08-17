import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrendingMovies } from '../utiles/movieSlice';
import { TMDB_API_OPTIONS } from '../utiles/constent';

const useTrending = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) => state.movies.trendingMovies);

  useEffect(() => {
    if (trendingMovies) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/trending/movie/day',
          TMDB_API_OPTIONS
        );
        const data = await res.json();
        dispatch(addTrendingMovies(data.results));
      } catch (error) {
        console.error('Trending fetch failed:', error);
      }
    };

    fetchData();
  }, []);
};

export default useTrending;