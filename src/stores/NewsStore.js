
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

class NewsStore extends EventEmitter {
  constructor() {
    super();
    /**
     * Setting the initial state of sources,
     * articles to empty
     */
    this.sources = [];
    this.articles = [];
    this.getSources = this.getSources.bind(this);
    this.getArticles = this.getArticles.bind(this);
  }

/**
 * Get Sources Function
  * @return {object} news sources.
 */
  getSources() {
    return this.sources;
  }

/**
 * Get Articles Function
  * @return {object} News Headlines.
 */
  getArticles() {
    return this.articles;
  }

 /**
     * Resolves the message dispatch to the store from the action,
     * and emit event based on the message type
     * @param {object} message - The message dispatch from the action
     */
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
