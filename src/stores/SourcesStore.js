import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/Dispatcher';

class SourcesStore extends EventEmitter {
  constructor() {
    super();
    /**
     * Setting the initial state of sources,
     * to empty
     */
    this.sources = [];
    this.getSources = this.getSources.bind(this);
  }

/**
 * Get Sources Function
  * @return {object} news sources.
 */
  getSources() {
    return this.sources;
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
    }
  }
}

const sourcesStore = new SourcesStore();
dispatcher.register(sourcesStore.resolveDispatch.bind(sourcesStore));
export default sourcesStore;
