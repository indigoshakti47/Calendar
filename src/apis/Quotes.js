import axios from "axios";

const quotesApi = axios.create({
  baseURL: "https://api.quotable.io	",
});

export const getQuoteData = async () => {
  const data = await quotesApi.get("random/", {
    headers: {
      'x-rapidapi-key': '5e15e3c493mshb814b686431e7adp17f050jsnf1711f210a0b',
      'x-rapidapi-host': 'healthruwords.p.rapidapi.com'
    }
  });

  return data.data;
};
