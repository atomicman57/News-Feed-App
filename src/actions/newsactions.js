import dispatcher from '../dispatcher/dispatcher';
import * as api from '../utils/newsapi';


/**
 * Get Sources Function
 * it calls api.getSources function
 * It receive the data from the api and put it in a callback...
 * And dispatch the data it get to the store with a message...
 * GET_SOURCES
 */

export function getSources() {
  api.getSources((data) => {
    dispatcher.dispatch({
      type: 'GET_SOURCES',
      data,
    });
  });
}


/**
 * Get Headlines Function
 * @param {string} The news source id e.g bbc-sport.
 * @param {string} The sort e.g top,latest.
 * it calls api.getHeadlines function
 * It receive the data from the api and put it in a callback...
 * And dispatch the data it get to the store with a message...
 * GET_ARTICLES
 */


export function getHeadlines(source, sort) {
  api.getHeadlines(source, sort, (data) => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      data,
    });
  });
}
