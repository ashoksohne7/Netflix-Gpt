import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utiles/movieSlice';
import { UPCOMING_URL } from '../utiles/constent';

const useUpcoming = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  useEffect(() => {
    if (upcomingMovies) return;
    const fetchData = async () => {
      try {
        const res = await fetch(UPCOMING_URL);
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