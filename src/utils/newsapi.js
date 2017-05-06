import axios from 'axios';

export function getSources(callback) {
  axios
        .get('https://newsapi.org/v1/sources')
        .then(result => callback(result.data.sources));
}


export function getHeadlines(sources, sort, callback) {
  axios
        .get(`https://newsapi.org/v1/articles?source=${sources}&sortBy=${sort}&apiKey=213327409d384371851777e7c7f78dfe`)
        .then(result => callback(result.data.articles));
}

window.mo = function getSources(callback) {
  axios
        .get('http://www.abc.net.au/news/2017-05-06/french-presidential-candidate-emmanuel-macrons-emails-hacked/8502516')
        .then(result => callback(result));
}
