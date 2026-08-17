import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utiles/movieSlice';
import { NOW_PLAYING_URL } from '../utiles/constent';

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies);

  useEffect(() => {
    if (nowPlayingMovies) return; // ✅ Already data hai toh API call mat karo

    const fetchNowPlaying = async () => {
      try {
        const response = await fetch(NOW_PLAYING_URL);
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