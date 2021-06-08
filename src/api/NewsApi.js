import axios from "axios";

async function getResponse(query) {
  const uri = `https://newsapi.org/v2/everything?qInTitle= 
    ${query}&apiKey=${process.env.NEWS_API_KEY}`;

  return axios
    .get(uri)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.log(err);
    });
}

export const NewsApi = async (query) => {
  const res = await getResponse(query);
  return res;
};
