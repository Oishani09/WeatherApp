import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import RecentSearches from './components/RecentSearches';
import useWeather from './hooks/useWeather';
import { FaSyncAlt, FaMoon, FaSun } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const {
    currentWeather,
    loading,
    error,
    fetchWeather,
    refetchCurrentCity,
    recentSearches
  } = useWeather();

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' : 'bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-900'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-left">
            🌤 Weather Dashboard
          </h1>

          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full shadow-lg transition-colors duration-200 ${
              darkMode
                ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            title="Toggle Dark/Light Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </header>

        {/* Search */}
        <div className="mb-6">
          <SearchBar onSearch={fetchWeather} />
          <RecentSearches searches={recentSearches} onSelect={fetchWeather} />
        </div>

        {/* Main Section */}
        <main>
          {loading && <LoadingSpinner />}

          {error && <ErrorMessage message={error} />}

          {currentWeather && !loading && (
            <div className="relative">
              {/* Refresh Button */}
              <button
                onClick={refetchCurrentCity}
                title="Refresh Weather"
                className="absolute right-0 -top-12 text-xl text-blue-600 dark:text-yellow-300 hover:scale-110 transition-transform"
              >
                <FaSyncAlt />
              </button>

              {/* Weather Info */}
              <WeatherCard data={currentWeather} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
