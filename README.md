# Weather Dashboard App

A responsive weather dashboard that displays current weather information for any city using the OpenWeatherMap API.

## Tech Stack

- React.js (Vite)
- Tailwind CSS for styling
- Axios for API requests
- React Icons for UI icons
- OpenWeatherMap API for weather data

## Features

- Search for weather by city name
- Display current temperature, weather conditions, humidity, and wind speed
- Responsive design (mobile and desktop)
- Recent search history (last 5 searches)
- Dark/light theme toggle
- Refresh button to update current weather
- Loading and error states

## Setup Instructions

1. Clone the repository:
```bash
git clone <your-repo-url>
cd weather-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your OpenWeatherMap API key:
```
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## API Integration Details

This app uses the OpenWeatherMap API to fetch weather data:

- **API Documentation**: [OpenWeatherMap API Docs](https://openweathermap.org/api)
- **API Used**: Current Weather Data API
- **API Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Rate Limits**: The free tier allows up to 60 calls per minute or 1,000,000 calls per month

Note: You need to sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api) to use this application.

## Deployment

This app is deployed on Vercel
