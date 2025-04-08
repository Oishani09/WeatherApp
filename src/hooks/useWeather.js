import { useState, useEffect } from 'react';
import { getCurrentWeather, getForecast } from '../utils/api';

const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem('recentSearches');
    return saved ? JSON.parse(saved) : [];
  });

  // Save recent searches to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  const fetchWeather = async (cityName) => {
    if (!cityName.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const weatherData = await getCurrentWeather(cityName);
      setCurrentWeather(weatherData);
      
      // Add to recent searches
      setRecentSearches(prev => {
        const updated = [cityName, ...prev.filter(item => item !== cityName)].slice(0, 5);
        return updated;
      });
      
      setCity(cityName);
      
      // Optional: Fetch forecast data for bonus feature
      try {
        const forecastData = await getForecast(cityName);
        setForecast(forecastData);
      } catch (forecastError) {
        console.error('Forecast fetch failed:', forecastError);
        // Don't set an error - forecast is optional
      }
      
    } catch (err) {
      setError(
        err.response?.status === 404
          ? 'City not found. Please check the spelling and try again.'
          : 'Failed to fetch weather data. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  const refetchCurrentCity = () => {
    if (city) {
      fetchWeather(city);
    }
  };

  return {
    currentWeather,
    forecast,
    loading,
    error,
    fetchWeather,
    refetchCurrentCity,
    recentSearches
  };
};

export default useWeather;