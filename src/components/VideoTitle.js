const VideoTitle = ({ title, overview }) => {
  return (
    <div className='absolute bottom-0 left-0 w-full px-16 py-16 bg-gradient-to-t from-black via-black/60 to-transparent'>
      
      {/* Movie Title */}
      <h1 className='mb-3 text-6xl font-extrabold tracking-tight text-white drop-shadow-2xl'>
        {title}
      </h1>

      {/* Description */}
      <p className='w-2/5 mb-6 text-base leading-relaxed text-gray-200 line-clamp-3 drop-shadow-md'>
        {overview}
      </p>

      {/* Buttons */}
      <div className='flex gap-3'>
        
        {/* Play Button */}
        <button className='flex items-center gap-2 px-7 py-2.5 text-lg font-bold text-black bg-white rounded-md hover:bg-gray-200 transition duration-200'>
          <svg className='w-6 h-6' fill='black' viewBox='0 0 24 24'>
            <path d='M8 5v14l11-7z'/>
          </svg>
          Play
        </button>

        {/* More Info Button */}
        <button className='flex items-center gap-2 px-7 py-2.5 text-lg font-bold text-white bg-gray-600/70 rounded-md hover:bg-gray-600/50 transition duration-200 backdrop-blur-sm'>
          <svg className='w-6 h-6' fill='white' viewBox='0 0 24 24'>
            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'/>
          </svg>
          More Info
        </button>

      </div>
    </div>
  );
};

export default VideoTitle;