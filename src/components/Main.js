import './Main.scss';

const Main = (props) => {
  const { weatherData } = props;
  const { locationInfo, futureWeather } = weatherData;
  if (Object.keys(weatherData).length === 0) {
    return (
      <div className='Main'>
        <h1>Welcome to React Weather</h1>
        <h2>Enter some location in the searchbar above</h2>
      </div>
    );
  } else {
    return (
      <div className='Main'>
        <div className='basic-info'>
          <div>
            <h1>
              {locationInfo.name}, {locationInfo.sys.country}
            </h1>
            <p>{locationInfo.main.temp}ºC</p>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${locationInfo.weather[0].icon}.png`}
                alt='Weather icon'
              />
            </div>
          </div>
        </div>
        <div className='advanced-info'>
          <p>Humidity: {locationInfo.main.humidity}</p>
          <p>Max temp: {locationInfo.main.temp_max}</p>
          <p>Min temp: {locationInfo.main.temp_min}</p>
          <p>Feels Like: {locationInfo.main.feels_like}</p>
        </div>
      </div>
    );
  }
};

export default Main;
