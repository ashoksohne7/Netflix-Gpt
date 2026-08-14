import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utiles/movieSlice';
import { TMDB_API_KEY } from '../utiles/constent';

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);

  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}`
    );
    const data = await response.json();
    
    const trailer = data.results.filter((video) => video.type === 'Trailer');
    const video = trailer.length ? trailer[0] : data.results[0];
    dispatch(addTrailerVideo(video));
  };

return (
  <div className='relative'>  {/* ✅ padding hatao */}
    
    {/* YouTube title hide karne ke liye - sirf choti si strip */}
    <div className='absolute top-0 left-0 z-10 w-full h-10 bg-black'></div>
    
    {/* Transparent overlay - buttons hide karne ke liye */}
    <div className='absolute inset-0 z-10 bg-transparent'></div>
    
    <iframe
      className='w-screen pointer-events-none aspect-video'  
      src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1`}
      title='trailer'
      allow='autoplay'
    ></iframe>

    {/* Neeche controls hide */}
    <div className='absolute bottom-0 left-0 z-10 w-full h-10 bg-black'></div>

  </div>
);
};

export default VideoBackground;