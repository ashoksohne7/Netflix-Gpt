import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TMDB_API_KEY, GEMINI_KEY } from '../utiles/constent';
import { addGptMovieResult } from '../utiles/gptSlice';

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchTMDB = async (movieName) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movieName)}`
      );
      if (!res.ok) {
        console.error('TMDB error:', res.status);
        return [];
      }
      const data = await res.json();
      return data?.results || [];
    } catch (error) {
      console.error('TMDB search failed:', error);
      return [];
    }
  };

  const handleSearch = async () => {
    const query = searchText.current.value.trim();
    if (!query) return;

    try {
      
        const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-001:generateContent?key=${GEMINI_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Act as a Movie Recommendation system. Suggest exactly 5 movies for this query: ${query}. Return ONLY the movie names separated by commas. Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini API Error:', errorData);
        alert(errorData?.error?.message || 'Gemini API request failed');
        return;
      }

      const data = await response.json();
      console.log('Gemini Response:', data);

      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) {
        console.error('No Gemini text found:', data);
        alert('Gemini did not return a response');
        return;
      }

      const gptMovies = text
        .split(',')
        .map((movie) => movie.trim())
        .filter(Boolean);

      console.log('GPT Movies:', gptMovies);

      const tmdbResults = await Promise.all(
        gptMovies.map((movie) => searchTMDB(movie))
      );

      dispatch(
        addGptMovieResult({
          gptMovieNames: gptMovies,
          gptMovies: tmdbResults,
        })
      );

    } catch (error) {
      console.error('Gemini Search failed:', error);
      alert('Search failed!');
    }
  };

  return (
    <div className="flex justify-center pt-40">
      <div className="flex w-1/2 overflow-hidden bg-black rounded-full shadow-2xl">
        <input
          ref={searchText}
          type="text"
          placeholder="What would you like to watch today?"
          className="w-full px-6 py-4 text-lg text-white bg-black outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-8 py-4 font-bold text-white transition bg-red-600 hover:bg-red-700 whitespace-nowrap"
        >
          🔍 Search
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;