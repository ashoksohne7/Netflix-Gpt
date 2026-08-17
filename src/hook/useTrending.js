import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrendingMovies } from '../utiles/movieSlice';
import { TRENDING_URL } from '../utiles/constent';

const useTrending = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) => state.movies.trendingMovies);

  useEffect(() => {
    if (trendingMovies) return;
    const fetchData = async () => {
      try {
        const res = await fetch(TRENDING_URL);
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