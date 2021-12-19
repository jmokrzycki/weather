

export default function WeatherTile({weather}) {

    const date = new Date(weather.dt * 1000);
    
    console.log(date.getDay(), ' ', date.getMonth());


    return(
        <div className="weather-tile">
            <h2>Friday</h2>

            <p>March 1st, 1:00px</p>

            <p>{weather.weather[0].icon}</p>

            <p>{weather.temp.day} º</p>


            <p>{weather.weather[0].description}</p>
            
        </div>
    )
}

