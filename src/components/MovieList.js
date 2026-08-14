import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className='px-8 py-4'>
      <h2 className='mb-3 text-xl font-bold text-white'>{title}</h2>
      <div 
        className='flex gap-4 py-4 overflow-x-scroll scrollbar-hide'
        style={{ overscrollBehavior: 'contain' }}
      >
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            posterPath={movie.poster_path}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;