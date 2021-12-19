import moment from 'moment';

export default function WeatherTile({weather}) {

    // const date = new Date(weather.dt * 1000);
    
    // console.log(date.getDate(), ' ', date.getMonth());

    const dayName = moment.unix(weather.dt).format("dddd");
    const time = moment.unix(weather.dt).format("MMMM Do, HH:mm a");


    return(
        <div className="weather-tile">
            <h2>{dayName}</h2>
            <p>{time}</p>
            <p>{weather.weather[0].icon}</p>
            <p>{weather.temp.day} º</p>
            <p>{weather.weather[0].description}</p>
        </div>
    )
}

