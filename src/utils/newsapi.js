import React from 'react'
import axios from 'axios';
import { config } from 'dotenv';

/**
 * Class representing News Api.
 * This class get data from the API
 * It makes the api call with axios.
 */
class NewsApi extends React.Component {
  constructor() {
    super();
    this.getSources = this.getSources.bind(this);
    this.getHeadlines = this.getHeadlines.bind(this);
/**
 * Base Url of the API
 */
    this.baseUrl = "https://newsapi.org/v1/";
    this.apiKey = process.env.API_KEY;
  }

/**
 * Get Sources Function
 * This function makes the API call to get News sources,
 * and it returns it
 */

  getSources() {
    const url = `${this.baseUrl}/sources`;
    return axios.get(url);
  }

/**
 * Get Headlines.
 * @param {string} sources - The News source e.g BBC.
 * @param {string} sort - The sort type e.g top, latest.
 * It makes the API call to get News Headlines
 * And returns it.
 */

  getHeadlines(sources, sort) {
    const url = `${this.baseUrl}/articles/?source=`;
    return axios.get(`${url}${sources}&sortBy=${sort}&apiKey=${this.apiKey}`)
  }
}
export default new NewsApi();
