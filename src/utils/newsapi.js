import axios from 'axios';


export function getSources(callback) {
  const url = 'https://newsapi.org/v1/sources';
  axios
        .get(url)
        .then(result => callback(result.data.sources));
}


export function getHeadlines(sources, sort, callback) {
  axios
        .get(`https://newsapi.org/v1/articles?source=${sources}&sortBy=${sort}&apiKey=213327409d384371851777e7c7f78dfe`)
        .then(result => callback(result.data.articles));
}

