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
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Weather Dashboard</h1>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-800'}`}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
          <SearchBar onSearch={fetchWeather} />
          <RecentSearches searches={recentSearches} onSelect={fetchWeather} />
        </header>

        <main>
          {loading && <LoadingSpinner />}
          
          {error && <ErrorMessage message={error} />}
          
          {currentWeather && !loading && (
            <div className="relative">
              <button
                onClick={refetchCurrentCity}
                className="absolute -top-10 right-0 p-2 text-blue-500 hover:text-blue-700 transition-colors"
                title="Refresh weather data"
              >
                <FaSyncAlt />
              </button>
              <WeatherCard data={currentWeather} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;