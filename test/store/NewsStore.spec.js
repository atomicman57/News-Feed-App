import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import { describe, it } from 'mocha';

import Articles from './StoreTestData';
import NewsStore from './../../src/stores/NewsStore';
import Dispatcher from './../../src/dispatcher/Dispatcher';

describe('News Store', () => {
  jsdom();

  it('should exist', () => {
    expect(NewsStore).to.exist;
  });

  it('should be an object', () => {
    expect(NewsStore).to.be.an('object');
  });

  describe('#getArticles', () => {
    it('to return articles that is being dispatched', () => {
      Dispatcher.dispatch({
        type: 'GET_ARTICLES',
        headlines: Articles
      });
      expect(NewsStore.getArticles()).to.eql(Articles);
    });

    it('to emit articles', () => {
      Dispatcher.dispatch({
        type: 'GET_ARTICLES',
        data: Articles
      });
      expect(NewsStore.emit('getarticles')).to.exist;
    });
  });
});
