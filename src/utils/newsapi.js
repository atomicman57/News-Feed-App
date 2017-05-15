import React from 'react'
import axios from 'axios';
import { config } from 'dotenv';


class NewsApi extends React.Component {
  constructor() {
    super();
    this.getSources = this.getSources.bind(this);
    this.getHeadlines = this.getHeadlines.bind(this);
    this.baseUrl = "https://newsapi.org/v1/";
    this.apiKey = process.env.API_KEY;
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
