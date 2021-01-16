import axios from 'axios';
import geocoder from './Geocoder';

const weatherClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const getcityWeather = async (cityName) => {
  const cityData = await geocoder.getCityData(cityName);
  const weather = await weatherClient.get('onecall', {
    params: {
      lat: cityData.lat,
      lon: cityData.lon,
      exclude: 'hourly,current,minutely',
      appid: process.env.REACT_APP_API_KEY,
    }
  })

  return weather.data;
}
