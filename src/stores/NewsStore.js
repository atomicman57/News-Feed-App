import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/Dispatcher';

class NewsStore extends EventEmitter {
  constructor() {
    super();
    /**
     * Setting the initial state of
     * articles to empty
     */
    this.articles = [];
    this.getArticles = this.getArticles.bind(this);
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
