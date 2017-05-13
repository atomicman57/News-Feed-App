import Dispatcher from '../dispatcher/dispatcher';
import NewsApi from '../utils/NewsApi';


class NewsActions {
  constructor() {
    this.getSources = this.getSources.bind(this);
    this.getHeadlines = this.getHeadlines.bind(this);
  }

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
