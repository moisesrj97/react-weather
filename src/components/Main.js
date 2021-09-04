import './Main.scss';

const Main = (props) => {
  const { weatherData } = props;
  const { locationInfo, futureWeather } = weatherData;

  console.log(locationInfo);

  if (Object.keys(weatherData).length === 0) {
    return (
      <div className='Main'>
        <h1>Welcome to React Weather</h1>
        <h2>Enter some location in the searchbar above</h2>
      </div>
    );
  } else {
    const sunrise = new Date(locationInfo.sys.sunrise * 1000);
    const sunset = new Date(locationInfo.sys.sunset * 1000);

    const sunriseFix =
      sunrise.getUTCHours() +
      locationInfo.timezone / 3600 +
      ':' +
      sunrise.getUTCMinutes();
    const sunsetFix =
      sunset.getUTCHours() +
      locationInfo.timezone / 3600 +
      ':' +
      sunset.getUTCMinutes();

    return (
      <div className='Main'>
        <div className='main-content'>
          <div className='basic-info'>
            <h1 className='city-name'>
              {locationInfo.name}, {locationInfo.sys.country}
            </h1>
            <div className='city-temp'>
              <p className='current-temp'>{locationInfo.main.temp}ºC</p>
              <p className='min-max'>
                Min/Max: {locationInfo.main.temp_min}ºC/
                {locationInfo.main.temp_max}ºC
              </p>
              <p className='current-feeling'>
                Feeling: {locationInfo.main.feels_like}ºC
              </p>
            </div>
            <div className='icon-info'>
              <img
                className='climate-icon'
                src={`https://openweathermap.org/img/wn/${locationInfo.weather[0].icon}@2x.png`}
                alt={locationInfo.weather[0].main}
                title={locationInfo.weather[0].main}
              />
              <i className='fas fa-tint'></i>
              <span className='humidity-data' title='Humidity'>
                {locationInfo.main.humidity}%
              </span>
            </div>
            <div className='time-info-container'>
              <div className='time-info-item'>
                <i className='far fa-sun' title='Sunrise'></i>
                <span className='humidity-data'>{sunriseFix}</span>
              </div>
              <div className='time-info-item'>
                <i className='far fa-moon' title='Sunset'></i>
                <span className='humidity-data'>{sunsetFix}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
