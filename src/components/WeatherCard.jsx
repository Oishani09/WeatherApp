import { FaWind, FaTemperatureHigh, FaWater } from 'react-icons/fa';

const WeatherCard = ({ data }) => {
  if (!data) return null;

  const {
    name,
    main: { temp, humidity, feels_like },
    weather,
    wind: { speed },
    sys: { country }
  } = data;

  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md">
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {name}, {country}
        </h2>
        <img
          src={weatherIcon}
          alt={weather[0].description}
          className="w-16 h-16"
        />
      </div>

      <div className="p-4">
        <div className="mb-4 text-center">
          <div className="text-5xl font-bold mb-2">{Math.round(temp)}°C</div>
          <div className="text-gray-500 capitalize">{weather[0].description}</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaTemperatureHigh className="text-orange-500 mr-2" />
            <div>
              <div className="text-sm text-gray-500">Feels Like</div>
              <div>{Math.round(feels_like)}°C</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <FaWater className="text-blue-500 mr-2" />
            <div>
              <div className="text-sm text-gray-500">Humidity</div>
              <div>{humidity}%</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <FaWind className="text-gray-500 mr-2" />
            <div>
              <div className="text-sm text-gray-500">Wind Speed</div>
              <div>{(speed * 3.6).toFixed(1)} km/h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;