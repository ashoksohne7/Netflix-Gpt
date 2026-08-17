import { useState } from 'react';
import { TMDB_IMAGE_URL, TMDB_ORIGINAL_IMAGE_URL } from '../utiles/constent';
import MovieModal from './MovieModal';

const MovieCard = ({ posterPath, movie }) => {
  const [showHover, setShowHover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  if (!posterPath) return null;

  return (
    <>
      <div
        className='relative flex-shrink-0 cursor-pointer w-36'
        onMouseEnter={() => setShowHover(true)}
        onMouseLeave={() => setShowHover(false)}
      >
        {/* Normal Card */}
        <img
          className='w-full'
          src={TMDB_IMAGE_URL + posterPath}
          alt={movie?.title}
        />

        {/* Hover Card */}
        {showHover && (
          <div
            className='absolute left-0 top-[-20%] w-72 bg-zinc-900 shadow-2xl z-50 origin-left'
            onMouseEnter={() => setShowHover(true)}
            onMouseLeave={() => setShowHover(false)}
          >
            {/* Backdrop Image with title overlay */}
            <div className='relative'>
              <img
                className='object-cover w-full aspect-video'
                src={TMDB_ORIGINAL_IMAGE_URL + movie?.backdrop_path}
                alt={movie?.title}
              />
              {/* Dark gradient + Title */}
              <div className='absolute bottom-0 left-0 w-full px-3 py-3 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent'>
                <h3 className='text-base font-bold text-white'>{movie?.title}</h3>
              </div>
            </div>

            {/* Buttons Row */}
            <div className='flex items-center justify-between px-3 pt-1 pb-2'>
              <div className='flex gap-2'>
                {/* Play - White */}
                <button className='flex items-center justify-center font-bold text-black bg-white rounded-full w-9 h-9 hover:bg-gray-200'>
                  ▶
                </button>
                {/* Add */}
                <button className='flex items-center justify-center text-xl text-white border-2 border-gray-500 rounded-full w-9 h-9 hover:border-white'>
                  +
                </button>
                {/* Like */}
                <button className='flex items-center justify-center text-white border-2 border-gray-500 rounded-full w-9 h-9 hover:border-white'>
                  👍
                </button>
              </div>

              {/* Down Arrow */}
              <button
                className='flex items-center justify-center text-white border-2 border-gray-500 rounded-full w-9 h-9 hover:border-white'
                onClick={() => {
                  setShowHover(false);
                  setShowModal(true);
                }}
              >
                ⌄
              </button>
            </div>

            {/* Rating badge */}
            <div className='flex items-center gap-2 px-3 pb-1 text-xs'>
              <span className='border border-gray-500 text-gray-300 px-1 py-0.5'>
                U/A 16+
              </span>
              <span className='border border-gray-500 text-gray-300 px-1 py-0.5'>
                HD
              </span>
            </div>

            {/* Genres */}
            <div className='px-3 pb-2 text-xs text-gray-300'>
              {movie?.genre_ids?.slice(0, 3).join(' • ')}
            </div>

            {/* Most Liked Badge */}
            <div className='flex items-center gap-1 px-3 pb-3 text-xs font-bold text-red-500'>
              🔥 Most Liked
            </div>

          </div>
        )}
      </div>

      {/* Full Modal */}
      {showModal && (
        <MovieModal movie={movie} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default MovieCard;