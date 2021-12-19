import 'axios';
import axios from 'axios';


export const getWeather = async function() {
    axios.get("https://api.openweathermap.org/data/2.5/forecast/daily?q=szczecin&cnt=12&units=metric&appid=7e395d69e03a3c651dd29f2a76b2f8f0")
    .then((response) => {
        return response.data.list;
    })
};