import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utiles/movieSlice';
import { TMDB_API_OPTIONS } from '../utiles/constent';

const useUpcoming = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  useEffect(() => {
    if (upcomingMovies) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
          TMDB_API_OPTIONS
        );
        const data = await res.json();
        dispatch(addUpcomingMovies(data.results));
      } catch (error) {
        console.error('Upcoming fetch failed:', error);
      }
    };

    fetchData();
  }, []);
};

export default useUpcoming;