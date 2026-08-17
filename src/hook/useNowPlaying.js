import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utiles/movieSlice';
import { TMDB_API_OPTIONS } from '../utiles/constent';

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies);

  useEffect(() => {
    if (nowPlayingMovies) return;

    const fetchNowPlaying = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
          TMDB_API_OPTIONS
        );
        const data = await response.json();
        dispatch(addNowPlayingMovies(data.results));
      } catch (error) {
        console.error('Now Playing fetch failed:', error);
      }
    };

    fetchNowPlaying();
  }, []);
};

export default useNowPlaying;