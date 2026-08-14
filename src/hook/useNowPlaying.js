// src/hooks/useNowPlaying.js

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utiles/movieSlice';
import { NOW_PLAYING_URL } from '../utiles/constent';

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies);

  useEffect(() => {
    // Already data hai toh dobara API call mat karo
    if (nowPlayingMovies) return;

    const fetchNowPlaying = async () => {
      const response = await fetch(NOW_PLAYING_URL);
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results));
    };

    fetchNowPlaying();
  }, []);
};

export default useNowPlaying;