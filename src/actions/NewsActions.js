import Dispatcher from '../dispatcher/Dispatcher';
import NewsApi from '../utils/NewsApi';

/**
 * Class representing News Actions.
 * This class handles actions sent from the components(views)
 */

class NewsActions {
  constructor() {
    this.getHeadlines = this.getHeadlines.bind(this);
  }

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
    });
  }
}

export default new NewsActions();
