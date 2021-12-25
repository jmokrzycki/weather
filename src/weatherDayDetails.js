import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router-dom'; 

export default function WeatherDayDetails() {
    const { date } = useParams();
    const selectedDateFormatted = moment.unix(date).format('YYYY-MM-DD')
    
    
    const [weatherData, setWeatherData] = useState([]);


    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/forecast?q=szczecin&appid=7e395d69e03a3c651dd29f2a76b2f8f0")
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
            temperatura 24h:
            <div className='weather-day-details-container'>
                
                { 
                  weatherData.map((element, index) => {
                    return(
                        <div className='weather-day-details-tile' key={index}>
                            <p>{moment.unix(element.dt).format("h:mm")}</p> 
                            <p>{element.temp} º</p>
                        </div>
                    );
                  })
                }
            </div>
        </>
    )
}