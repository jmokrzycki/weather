import logo from './logo.svg';
import './App.css';
// import { getWeather } from './fetchData';
import { useEffect, useState } from 'react';

import axios from 'axios';
import WeatherTile from './weatherTile';


function App() {
  console.log('render');
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/forecast/daily?q=szczecin&cnt=12&units=metric&appid=7e395d69e03a3c651dd29f2a76b2f8f0")
    .then((response) => {
      setWeatherData(Object.values(response.data.list));
      console.log(response.data);
    })
  }, []);

  return (
    <div className="App">
      5-Day Forecast.
      
      {
        weatherData.map((day, index) => {

          return (
            <div key={index}>
              {day.temp.day}

              <WeatherTile weather={day}/>
            </div>
          );
          
        })
      }
        
    
--
 

    </div>
  );
}

export default App;
