
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

class Newsstore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
    this.articles = [];
    this.getSources = this.getSources.bind(this);
    this.getArticles = this.getArticles.bind(this);
  }


  getSources() {
    return this.sources;
  }

  getArticles() {
    return this.articles;
  }

  resolveDispatch(message) {
    switch (message.type) {
      case 'GET_SOURCES': {
        this.sources = message.data;
        this.emit('sources');
        break;
      }
      case 'GET_ARTICLES': {
        this.articles = message.data;
        this.emit('articles');
        break;
      }
    }
  }

}
const newsstore = new Newsstore();
dispatcher.register(newsstore.resolveDispatch.bind(newsstore));
export default newsstore;
