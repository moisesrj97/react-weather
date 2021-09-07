import axios from 'axios';
import { useState } from 'react';
import './App.scss';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  const [data, setData] = useState({});

  const getWeatherData = async (location) => {
    try {
      const locationResponse = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
          params: {
            q: location,
            appid: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
            units: 'metric',
          },
        }
      );

      const coord = locationResponse.data.coord;

      const weatherResponse = await axios.get(
        'https://api.openweathermap.org/data/2.5/onecall',
        {
          params: {
            ...coord,
            appid: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
            units: 'metric',
          },
        }
      );

      setData({
        locationInfo: locationResponse.data,
        futureWeather: weatherResponse.data,
      });
    } catch (e) {
      setData({ error: 'Place not found' });
    }
  };

  return (
    <div className='App'>
      <Navbar handleSearch={getWeatherData} />
      <Main weatherData={data} />
    </div>
  );
}

export default App;
