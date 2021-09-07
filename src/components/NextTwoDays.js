import React from 'react';
import './NextTwoDays.scss';

const NextTwoDays = (props) => {
  return (
    <div className='hourly-prediction'>
      <h4>48h forecast</h4>
      <input
        type='range'
        min='0'
        max='47'
        defaultValue='0'
        onChange={props.handleSlider}
        onTouchMove={props.handleSlider}
      ></input>
      <div className='hourly-forecast'>
        {props.hourly.map((e, index) => {
          const date = new Date();
          let hour = date.getUTCHours() + props.timezone / 3600 + index + 1;
          let minutes = date.getUTCMinutes();
          let plusDays = 0;

          while (hour > 24) {
            hour -= 24;
            plusDays++;
          }

          return (
            <div
              className={
                index == props.selectedHour
                  ? 'hourly-item--active'
                  : 'hourly-item--hidden'
              }
              key={index}
            >
              <h3>
                {hour}:{minutes} {plusDays > 0 ? `+${plusDays}` : null}
              </h3>
              <div className='basic-info'>
                <div className='city-temp' key={index}>
                  <p className='current-temp'>{e.temp}ºC</p>
                  <p className='current-feeling'>Feeling: {e.feels_like}ºC</p>
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
  );
};

export default NextTwoDays;
