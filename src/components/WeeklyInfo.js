import React from 'react';
import './WeeklyInfo.scss';

const WeeklyInfo = (props) => {
  return (
    <div className='terciary-info'>
      <h4>7 days forecast</h4>
      <input
        type='range'
        min='0'
        max='7'
        defaultValue='0'
        onChange={props.handleSlider}
        onTouchMove={props.handleSlider}
      ></input>
      {props.daily.map((e, index) => {
        const sunrise = new Date(e.sunrise * 1000);
        const sunset = new Date(e.sunset * 1000);

        const sunriseFix =
          (sunrise.getUTCHours() + props.timezone / 3600)
            .toString()
            .padStart(2, '0') +
          ':' +
          sunrise.getUTCMinutes().toString().padStart(2, '0');
        const sunsetFix =
          (sunset.getUTCHours() + props.timezone / 3600)
            .toString()
            .padStart(2, '0') +
          ':' +
          sunset.getUTCMinutes().toString().padStart(2, '0');
        return (
          <div
            className={
              props.selectedDay == index
                ? 'basic-info-forecast--active'
                : 'basic-info-forecast--hidden'
            }
            key={index}
          >
            <div className='basic-display'>
              <h1 className='city-name'>
                {new Date(e.dt * 1000).getDate().toString().padStart(2, '0')}/
                {(new Date(e.dt * 1000).getMonth() + 1)
                  .toString()
                  .padStart(2, '0')}
              </h1>
              <p className='min-max'>Min/Max</p>
              <p className='min-max'>
                {e.temp.min}ºC/
                {e.temp.max}ºC
              </p>
            </div>

            <div className='city-temp-forecast'>
              <div className='city-temp-forecast-actual'>
                <h4>Temperature:</h4>
                <p> Day: {e.temp.day}ºC</p>
                <p> Evening: {e.temp.eve}ºC</p>
                <p> Morning: {e.temp.morn}ºC</p>
                <p> Night: {e.temp.night}ºC</p>
              </div>
              <div className='city-temp-forecast-feeling'>
                <h4>Feeling:</h4>
                <p>{e.feels_like.day}ºC</p>
                <p>{e.feels_like.eve}ºC</p>
                <p>{e.feels_like.morn}ºC</p>
                <p>{e.feels_like.night}ºC</p>
              </div>
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
      })}
    </div>
  );
};

export default WeeklyInfo;
