import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utiles/movieSlice';
import { POPULAR_URL } from '../utiles/constent';

const usePopular = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  useEffect(() => {
    if (popularMovies) return;
    const fetchData = async () => {
      const res = await fetch(POPULAR_URL);
      const data = await res.json();
      dispatch(addPopularMovies(data.results));
    };
    fetchData();
  }, []);
};
export default usePopular;