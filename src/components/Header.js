import {signOut} from "firebase/auth";
import { auth } from "../utiles/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
         signOut(auth).then(() => {
         // Sign-out successful.
         navigate("/");
}).catch((error) => {
  // An error happened.
  navigate("/browse");
});
    
  }
  
  return (
    <div
      className="absolute top-0 left-0 z-50 flex items-center justify-between w-full px-12 py-4"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)",
      }}
    >
      {/* Netflix Logo */}
      <img
        className="w-32 cursor-pointer"
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAZge2REfWoSoWRs31izjUdgihldMUslSHTdfz-1aT4vVrgJuVByU92G8wIrBkwULJHWjM1khpzW0xWndigQFYViKFpy-pM6NZFnTKEPkpf9hcdSzCyzqBbcouyIpmgVLbodhaeyqCXaS.svg"
        alt="Netflix Logo"
      />

      {/* Nav Links */}
      <nav className="hidden gap-10 text-sm font-medium text-gray-200 md:flex">
        {["Home", "Shows", "Movies", "New & Popular", "My List", "Browse by Languages"].map(
          (item) => (
            <a
              key={item}
              href="#"
              className={`hover:text-white transition-colors ${
                item === "Home" ? "text-white font-semibold" : ""
              }`}
            >
              {item}
            </a>
          )
        )}
      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white transition-colors cursor-pointer hover:text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>

        {/* Bell Icon */}
        <div className="relative cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white transition-colors hover:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 1 1-6 0"
            />
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        </div>

        {/* User Avatar + Dropdown */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <img
            className="w-8 h-8 rounded"
            alt="usericon"
            src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABWdoQDrgD7cokEYrF-FVdgfoil5wiBMg6j3GeUjYY_av6C64opFSXOsJ5U8EF02G6SB6b4zUw4MSG6EtpQu8gUBg1Y5Bgs4.png?r=229"
          />
          {/* Caret */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 text-white transition-transform group-hover:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>

          {/* Dropdown */}
          <div className="absolute hidden w-40 text-sm text-white border border-gray-700 rounded shadow-lg top-14 right-8 bg-black/90 group-hover:block">
            <button onClick={handleSignOut} className="w-full px-4 py-3 text-left transition-colors hover:bg-white/10">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;