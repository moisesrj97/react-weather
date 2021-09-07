import { useState } from 'react';
import './Main.scss';

const Main = (props) => {
  const { weatherData } = props;
  const { locationInfo, futureWeather } = weatherData;

  const [selectedMinute, setSelectedMinute] = useState('0');
  const [selectedHour, setSelectedHour] = useState('0');

  const handleMinuteSlider = (evt) => {
    setSelectedMinute(evt.target.value);
  };

  const handleHourSlider = (evt) => {
    setSelectedHour(evt.target.value);
  };

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
      (sunrise.getUTCHours() + locationInfo.timezone / 3600)
        .toString()
        .padStart(2, '0') +
      ':' +
      sunrise.getUTCMinutes().toString().padStart(2, '0');
    const sunsetFix =
      (sunset.getUTCHours() + locationInfo.timezone / 3600)
        .toString()
        .padStart(2, '0') +
      ':' +
      sunset.getUTCMinutes().toString().padStart(2, '0');
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
          <hr></hr>
          <div className='secondary-info'>
            <div className='next-hour-prediction'>
              <h4>Next hour precipitations</h4>
              <input
                type='range'
                min='0'
                max='60'
                defaultValue='0'
                onChange={handleMinuteSlider}
                onTouchMove={handleMinuteSlider}
              ></input>
              <div className='next-hour-items'>
                {futureWeather.minutely.map((e, index) => {
                  const date = new Date();
                  let hour = date.getUTCHours() + locationInfo.timezone / 3600;
                  let minutes = date.getUTCMinutes() + index + 1;

                  if (minutes > 59) {
                    hour++;
                    minutes -= 60;
                  }

                  return (
                    <div
                      className={
                        index == selectedMinute
                          ? 'next-hour-item--active'
                          : 'next-hour-item'
                      }
                    >
                      <h3 key={index}>
                        {hour.toString().padStart(2, '0')}:
                        {minutes.toString().padStart(2, '0')}
                      </h3>
                      <p>{e.precipitation}mm/m2</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='hourly-prediction'>
              <h4>24h forecast</h4>
              <input
                type='range'
                min='0'
                max='47'
                defaultValue='0'
                onChange={handleHourSlider}
                onTouchMove={handleHourSlider}
              ></input>
              <div class='hourly-forecast'>
                {futureWeather.hourly.map((e, index) => {
                  const date = new Date();
                  let hour =
                    date.getUTCHours() +
                    locationInfo.timezone / 3600 +
                    index +
                    1;
                  let minutes = date.getUTCMinutes();

                  while (hour > 24) {
                    hour -= 24;
                  }

                  return (
                    <div
                      className={
                        index == selectedHour
                          ? 'hourly-item--active'
                          : 'hourly-item'
                      }
                    >
                      <h3>
                        {hour}:{minutes}
                      </h3>
                      <div className='basic-info'>
                        <div className='city-temp' key={index}>
                          <p className='current-temp'>{e.temp}ºC</p>
                          <p className='current-feeling'>
                            Feeling: {e.feels_like}ºC
                          </p>
                        </div>
                        <div className='icon-info'>
                          <img
                            className='climate-icon'
                            src={`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}
                            alt={e.weather[0].main}
                            title={e.weather[0].main}
                          />
                          <i className='fas fa-tint'></i>
                          <span className='humidity-data' title='Humidity'>
                            {e.humidity}%
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='terciary-info'></div>
        </div>
      </div>
    );
  }
};

export default Main;
