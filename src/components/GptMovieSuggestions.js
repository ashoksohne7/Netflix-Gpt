import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const { gptMovies, gptMovieNames } = useSelector((state) => state.gpt);

  if (!gptMovies) return null;

  return (
    <div className='p-4 mx-4 mt-8 bg-black/80 rounded-xl'>
      {gptMovieNames.map((name, index) => (
        <MovieList
          key={name}
          title={name}
          movies={gptMovies[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;