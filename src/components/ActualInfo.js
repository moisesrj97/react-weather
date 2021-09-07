import React from 'react';
import './ActualInfo.scss';

const ActualInfo = (props) => {
  const sunrise = new Date(props.sys.sunrise * 1000);
  const sunset = new Date(props.sys.sunset * 1000);

  const sunriseFix =
    (sunrise.getUTCHours() + props.timezone / 3600)
      .toString()
      .padStart(2, '0') +
    ':' +
    sunrise.getUTCMinutes().toString().padStart(2, '0');
  const sunsetFix =
    (sunset.getUTCHours() + props.timezone / 3600).toString().padStart(2, '0') +
    ':' +
    sunset.getUTCMinutes().toString().padStart(2, '0');

  return (
    <div className='basic-info'>
      <h1 className='city-name'>
        {props.name}, {props.sys.country}
      </h1>
      <div className='city-temp'>
        <p className='current-temp'>{props.main.temp}ºC</p>
        <p className='min-max'>
          Min/Max: {props.main.temp_min}ºC/
          {props.main.temp_max}ºC
        </p>
        <p className='current-feeling'>Feeling: {props.main.feels_like}ºC</p>
      </div>
      <div className='icon-info'>
        <img
          className='climate-icon'
          src={`https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
          alt={props.weather[0].main}
          title={props.weather[0].main}
        />
        <i className='fas fa-tint'></i>
        <span className='humidity-data' title='Humidity'>
          {props.main.humidity}%
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
  );
};

export default ActualInfo;
