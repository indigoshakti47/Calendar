import axios from "axios";

const geocoderApi = axios.create({
  baseURL: "http://api.openweathermap.org/geo/1.0",
});

export const getCities = async (citySlug) => {
  const data = await geocoderApi.get("direct", {
    params: {
      q: citySlug,
      appid: process.env.REACT_APP_API_KEY,
      limit: 5,
    },
  });

  return data.data
}
