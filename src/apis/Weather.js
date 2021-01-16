import axios from 'axios';

const weatherClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const getcityWeather = async (cityData) => {
  const { data } = await weatherClient.get('onecall', {
    params: {
      lat: cityData.lat || 4.6097,
      lon: cityData.lon || -74.0817,
      exclude: 'hourly,current,minutely',
      appid: process.env.REACT_APP_API_KEY,
    }
  });

  const dailyData = data.daily.map(({ weather, dt }) => {
    return {
      date: new Date(dt * 1000),
      icon: `http://openweathermap.org/img/w/${weather[0].icon}.png`
    }
  });

  return transformArrayToMap(dailyData);
}

function transformArrayToMap(arr) {
  const result = {};
  for (const val of arr) {
    result[`${val.date.getFullYear()}_${val.date.getMonth()}_${val.date.getDate()}`] = val.icon
  }

  return result;
}
