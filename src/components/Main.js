import { useState } from 'react';
import ActualInfo from './ActualInfo';
import './Main.scss';
import NextHour from './NextHour';
import NextTwoDays from './NextTwoDays';
import WeeklyInfo from './WeeklyInfo';

const Main = (props) => {
  const { weatherData } = props;
  const { locationInfo, futureWeather } = weatherData;

  const [selectedMinute, setSelectedMinute] = useState('0');
  const [selectedHour, setSelectedHour] = useState('0');
  const [selectedDay, setSelectedDay] = useState('0');

  const handleMinuteSlider = (evt) => {
    setSelectedMinute(evt.target.value);
  };

  const handleHourSlider = (evt) => {
    setSelectedHour(evt.target.value);
  };

  const handleDaySlider = (evt) => {
    setSelectedDay(evt.target.value);
  };

  if (Object.keys(weatherData).length === 1) {
    return (
      <div className='Main'>
        <h1>Okay, this is embarrassing</h1>
        <h2>
          We couldn´t find the locality you´re looking for. Are you sure it´s
          spelled correctly?
        </h2>
      </div>
    );
  } else if (Object.keys(weatherData).length === 0) {
    return (
      <div className='Main'>
        <h1>Welcome to React Weather</h1>
        <h2>Enter some location in the searchbar above</h2>
      </div>
    );
  } else {
    return (
      <div className='Main'>
        <div className='main-content'>
          <ActualInfo {...locationInfo} />
          <hr></hr>
          <div className='secondary-info'>
            <NextHour
              handleSlider={handleMinuteSlider}
              selectedMinute={selectedMinute}
              {...futureWeather}
              {...locationInfo}
            />
            <NextTwoDays
              handleSlider={handleHourSlider}
              selectedHour={selectedHour}
              {...futureWeather}
              {...locationInfo}
            />
          </div>
          <hr></hr>
          <WeeklyInfo
            handleSlider={handleDaySlider}
            selectedDay={selectedDay}
            {...futureWeather}
            {...locationInfo}
          />
        </div>
      </div>
    );
  }
};

export default Main;
