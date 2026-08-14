import { TMDB_IMAGE_URL } from '../utiles/constent';

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;
  
  return (
    <div className='relative flex-shrink-0 overflow-hidden transition-all duration-300 ease-in-out rounded-md cursor-pointer  w-36 hover:scale-125 hover:z-10 hover:shadow-2xl hover:shadow-black'>
      <img
        className='w-full rounded-md'
        src={TMDB_IMAGE_URL + posterPath}
        alt={title || "movie"}
      />
    </div>
  );
};

export default MovieCard;