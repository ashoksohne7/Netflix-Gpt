import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../utiles/movieSlice';
import { TOP_RATED_URL } from '../utiles/constent';

const useTopRated = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  useEffect(() => {
    if (topRatedMovies) return;
    const fetchData = async () => {
      const res = await fetch(TOP_RATED_URL);
      const data = await res.json();
      dispatch(addTopRatedMovies(data.results));
    };
    fetchData();
  }, []);
};
export default useTopRated;