import logo from './logo.svg';
import './App.css';
// import { getWeather } from './fetchData';
import { useEffect, useState } from 'react';

import axios from 'axios';
import WeatherTile from './weatherTile';

import { Link } from 'react-router-dom';


function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/forecast/daily?q=szczecin&cnt=5&units=metric&appid=7e395d69e03a3c651dd29f2a76b2f8f0")
    .then((response) => {
      setWeatherData(Object.values(response.data.list));
    })
  }, []);

  return (
    <div className="App">
      <div className='header'>
        <h1>5-Day Forecast.</h1>
      </div>
      <div className='weather-tiles-container'>
      {
        weatherData.map((day, index) => {
          return (
            <div key={index}>
              <Link to={`/day-details/${day.dt}`}>
                <WeatherTile weather={day}/>
              </Link>
            </div>
          );
        })
        
      }
      </div>
    </div>
  );
}

export default App;
