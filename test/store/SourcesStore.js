import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import { describe, it } from 'mocha';

import Sources from './StoreTestData';
import SourcesStore from './../../src/stores/SourcesStore';
import Dispatcher from './../../src/dispatcher/Dispatcher';

describe('Sources Store', () => {
  jsdom();

  it('should exist', () => {
    expect(SourcesStore).to.exist;
  });

  it('should be an object', () => {
    expect(SourcesStore).to.be.an('object');
  });

  describe('#getSources', () => {
    it('to return sources that is being dispatched', () => {
      Dispatcher.dispatch({
        type: 'GET_SOURCES',
        sources: Sources
      });
      expect(SourcesStore.getSources()).to.eql(Sources);
    });

    it('to emit sources', () => {
      Dispatcher.dispatch({
        type: 'GET_SOURCES',
        sources: Sources
      });
      expect(SourcesStore.emit('getsources')).to.exist;
    });
  });
});
