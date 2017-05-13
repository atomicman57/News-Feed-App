import React from 'react'
import axios from 'axios';

class NewsApi extends React.Component {
  constructor() {
    super();
    this.getSources = this.getSources.bind(this);
    this.getHeadlines = this.getHeadlines.bind(this);
    this.baseUrl = "https://newsapi.org/v1/";
    this.apiKey = '213327409d384371851777e7c7f78dfe'
  }


  getSources() {
    const url = `${this.baseUrl}/sources`;
    return axios.get(url);
  }

  getHeadlines(sources, sort) {
    const url = `${this.baseUrl}/articles`;
    return axios.get(`${url}/?source=${sources}&sortBy=${sort}&apiKey=${this.apiKey}`)
  }
}
export default new NewsApi();
