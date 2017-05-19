import Dispatcher from '../dispatcher/dispatcher';
import NewsApi from '../utils/newsapi';

/**
 * Class representing News Actions.
 * This class handles actions sent from the components(views)
 */

class NewsActions {
  constructor() {
    this.getSources = this.getSources.bind(this);
    this.getHeadlines = this.getHeadlines.bind(this);
  }

/**
 * Get Sources Function
 * This function get the JSON that contains News sources,
 * from the API, then it dispatch(send) it with a message,
 * to the store.
 * The message is to identify which kind of ACTION,
 * is sending data
 */

  getSources() {
    const apiCall = NewsApi.getSources();
    apiCall.then((result) => {
      const sources = result.data.sources;
      Dispatcher.dispatch({
        type: 'GET_SOURCES',
        sources,
      });
    }).catch((err) => {
      Dispatcher.dispatch({
        type: 'GET_SOURCES',
        err,
      });
    });
  };

/**
 * Get Headlines.
 * @param {string} source - The News source e.g BBC.
 * @param {string} sort - The sort type e.g top, latest.
 * It gets the News headline JSON data based on the source
 * and sort.
 * And it dispatch it with a GET_ARTICLES message.
 */

  getHeadlines(source, sort) {
    const apiCall = NewsApi.getHeadlines(source, sort);
    apiCall.then((result) => {
      const headlines = result.data.articles;
      Dispatcher.dispatch({
        type: 'GET_ARTICLES',
        headlines,
      });
    })
  }
}

export default new NewsActions();
