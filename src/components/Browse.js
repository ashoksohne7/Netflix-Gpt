import Header from './Header'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useNowPlaying from '../hook/useNowPlaying';
import HeroSection from './HeroSection';
import MovieContainer from './MovieContainer';
import Footer from './Footer';
import GptSearch from './GptSearch'; // ✅ Add karo

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch); // ✅ Add karo

  useNowPlaying();

  useEffect(() => {
    if (!user) navigate('/');
  }, [user]);

  return (
    <div>
      <Header/>
      {/* ✅ GPT Search ya Normal Page */}
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <HeroSection/>
          <MovieContainer/>
          <Footer/>
        </>
      )}
    </div>
  )
};

export default Browse;