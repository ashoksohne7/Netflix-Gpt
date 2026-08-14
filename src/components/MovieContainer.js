import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import useTrending from '../hook/useTrending';
import useTopRated from '../hook/useTopRated';
import usePopular from '../hook/usePopular';
import useUpcoming from '../hook/useUpcoming'; 


const MovieContainer = () => {
  useTrending();
  useTopRated();
  usePopular();
    useUpcoming(); 


  const movies = useSelector((state) => state.movies);

  return (
    <div className='pb-10 bg-black'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending Now"} movies={movies.trendingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies} /> 

    </div>
  );
};

export default MovieContainer;