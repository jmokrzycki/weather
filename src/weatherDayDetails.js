import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router-dom'; 
import WeatherHourDetailsTile from './weatherHourDetailTile'

export default function WeatherDayDetails() {
    const { date } = useParams();
    const selectedDateFormatted = moment.unix(date).format('YYYY-MM-DD')
    
    
    const [weatherData, setWeatherData] = useState([]);


    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/forecast?q=szczecin&units=metric&appid=7e395d69e03a3c651dd29f2a76b2f8f0")
        .then((response) => {
          const selectedDayWeather = response.data.list.filter(element => {
            if (moment.unix(element.dt).isSame(selectedDateFormatted, 'day')) {
              return element;
            }
          });
          setWeatherData(selectedDayWeather);
        });
      }, []);

    return (
        <>
            <div className='header'>
              <h1>24 hour Forecast.</h1>
            </div>
            <div className='weather-day-details-container'>
                
                { 
                  weatherData.map((element, index) => {
                    return(
                        <WeatherHourDetailsTile weather={element} key={index} />
                    );
                  })
                }
            </div>
        </>
    )
}