import React from 'react';
import './NextHour.scss';

const NextHour = (props) => {
  return (
    <div className='next-hour-prediction'>
      <h4>Next hour precipitations</h4>
      <input
        type='range'
        min='0'
        max='60'
        value={props.selectedMinute}
        onChange={props.handleSlider}
        onTouchMove={props.handleSlider}
      ></input>
      <div className='next-hour-items'>
        {props.minutely.map((e, index) => {
          const date = new Date();
          let hour = date.getUTCHours() + props.timezone / 3600;
          let minutes = date.getUTCMinutes() + index + 1;

          if (minutes > 59) {
            hour++;
            minutes -= 60;
          }

          return (
            <div
              className={
                index == props.selectedMinute
                  ? 'next-hour-item--active'
                  : 'next-hour-item--hidden'
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
  );
};

export default NextHour;
