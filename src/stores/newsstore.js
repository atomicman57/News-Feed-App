
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/Dispatcher';

class NewsStore extends EventEmitter {
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
        this.sources = message.sources;
        this.emit('getsources');
        break;
      }
      case 'GET_ARTICLES': {
        this.articles = message.headlines;
        this.emit('getarticles');
        break;
      }
    }
  }

}

const newsStore = new NewsStore();
dispatcher.register(newsStore.resolveDispatch.bind(newsStore));
export default newsStore;
