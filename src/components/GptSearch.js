import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
  return (
    <div className='relative min-h-screen'>
      {/* Background */}
      <div className='fixed inset-0 -z-10'>
        <img
          className='object-cover w-full h-full'
          src='https://i.pinimg.com/1200x/3b/88/8a/3b888ae33caddd009ea0262a6dace304.jpg'
          alt='background'
        />
        <div className='absolute inset-0 bg-black/60'></div>
      </div>

      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;