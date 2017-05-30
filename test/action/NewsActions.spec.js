import sinon from 'sinon';
import { describe, it } from 'mocha';

import Dispatcher from './../../src/dispatcher/Dispatcher';
import NewsActions from '../../src/actions/NewsActions';
import SourcesActions from '../../src/actions/SourcesAction';
import MockNewsHeadlines from './TestData';

const axios = {
  get() {
    return Promise.resolve(MockNewsHeadlines);
  }
};
let dispatcherSpy;
let axiosSpy;
beforeEach(() => {
  dispatcherSpy = sinon.spy(Dispatcher, 'dispatch');
  axiosSpy = sinon.mock(axios, () => axios);
});

afterEach(() => {
  dispatcherSpy.restore();
  axiosSpy.restore();
});

describe('News Actions', () => {
  describe('#getHeadlines', () => {
    it('Should dispatch the news headlines to the store', () => {
      NewsActions.getHeadlines().then(() => {
        expect(axoisSpy).to.have.callCount(1);
        expect(dispatcherSpy).to.have.been.calledWith({
          type: 'GET_ARTICLES',
          data: MockNewsHeadlines
        });
      });
    });
  });
});

describe('Sources Actions', () => {
  describe('#getSources', () => {
    it('Should dispatch the news sources to the store', () => {
      SourcesActions.getSources().then(() => {
        expect(axiosSpy).to.have.callCount(1);
        expect(dispatcherSpy).to.have.been.calledWith({
          type: 'GET_SOURCES',
          data: MockNewsSources
        });
      });
    });
  });
});
