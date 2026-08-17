import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../utiles/movieSlice';
import { TMDB_API_OPTIONS } from '../utiles/constent';

const useTopRated = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);

  useEffect(() => {
    if (topRatedMovies) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
          TMDB_API_OPTIONS
        );
        const data = await res.json();
        dispatch(addTopRatedMovies(data.results));
      } catch (error) {
        console.error('Top Rated fetch failed:', error);
      }
    };

    fetchData();
  }, []);
};

export default useTopRated;