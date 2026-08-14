import Header from './Header'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useNowPlaying from '../hook/useNowPlaying'; 
import HeroSection from './HeroSection'; 
import MovieContainer from './MovieContainer';
import Footer from './Footer'; 


const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useNowPlaying(); 

  useEffect(() => {
    if (!user) navigate('/');
  }, [user]);

  return (
    <div>
      <Header/>
      <HeroSection/>
      <MovieContainer/>
      <Footer/>
    </div>
  )
};

export default Browse;