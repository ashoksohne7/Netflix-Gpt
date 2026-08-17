import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utiles/movieSlice';
import { TMDB_API_OPTIONS } from '../utiles/constent';

const usePopular = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);

  useEffect(() => {
    if (popularMovies) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
          TMDB_API_OPTIONS
        );
        const data = await res.json();
        dispatch(addPopularMovies(data.results));
      } catch (error) {
        console.error('Popular fetch failed:', error);
      }
    };

    fetchData();
  }, []);
};

export default usePopular;