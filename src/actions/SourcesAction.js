import Dispatcher from '../dispatcher/Dispatcher';
import NewsApi from '../utils/NewsApi';

/**
 * Class representing Sources Actions.
 * This class handles actions sent from the components(views)
 */

class SourcesActions {
  constructor() {
    this.getSources = this.getSources.bind(this);
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
  }
}

export default new SourcesActions();
