import { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_ORIGINAL_IMAGE_URL } from '../utiles/constent';

const MovieModal = ({ movie, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${TMDB_API_KEY}&append_to_response=videos,credits`
      );
      const data = await res.json();
      setMovieDetails(data);
      const trailer = data.videos?.results?.find(v => v.type === 'Trailer');
      setTrailer(trailer);
    };
    fetchDetails();
  }, [movie]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'
     onClick={onClose}>
      <div className='bg-zinc-900 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto'
           onClick={e => e.stopPropagation()}>
        
        {/* Close Button */}
        <div className='relative'>
          <button onClick={onClose}
                  className='absolute z-10 p-2 rounded-full top-4 right-4 bg-zinc-900 hover:bg-zinc-700'>
            ✕
          </button>

          {/* Trailer/Backdrop */}
          {trailer ? (
            <iframe
             className='w-full pointer-events-none aspect-video rounded-t-xl'
             src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
             allow='autoplay'
           />
          ) : (
            <img
              className='object-cover w-full aspect-video rounded-t-xl'
              src={TMDB_ORIGINAL_IMAGE_URL + movie.backdrop_path}
              alt={movie.title}
            />
          )}
        </div>

        {/* Content */}
        <div className='p-6'>
          <h2 className='mb-2 text-3xl font-bold text-white'>{movie.title}</h2>
          
          {/* Buttons */}
          <div className='flex gap-3 mb-4'>
            <button className='flex items-center gap-2 px-6 py-2 font-bold text-black bg-white rounded-md hover:bg-gray-200'>
              ▶ Play
            </button>
            <button className='flex items-center gap-2 px-6 py-2 font-bold text-white rounded-md bg-zinc-700 hover:bg-zinc-600'>
              + My List
            </button>
          </div>

          {/* Info */}
          <div className='flex gap-4 mb-4 text-sm text-gray-400'>
            <span className='font-bold text-green-500'>
              {Math.round(movie.vote_average * 10)}% Match
            </span>
            <span>{movie.release_date?.split('-')[0]}</span>
            <span className='px-1 border border-gray-600'>HD</span>
          </div>

          {/* Description */}
          <p className='mb-4 text-gray-300'>{movie.overview}</p>

          {/* Cast & Genre */}
          {movieDetails && (
            <div className='text-sm text-gray-400'>
              <p className='mb-2'>
                <span className='text-gray-500'>Cast: </span>
                {movieDetails.credits?.cast?.slice(0,4).map(c => c.name).join(', ')}
              </p>
              <p>
                <span className='text-gray-500'>Genres: </span>
                {movieDetails.genres?.map(g => g.name).join(', ')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieModal;