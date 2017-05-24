import jsdom from 'mocha-jsdom';
import chai from 'chai';
import sinon from 'sinon';
import chaiEnzyme from 'chai-enzyme';
import { describe, it } from 'mocha';

import Dispatcher from './../../src/dispatcher/Dispatcher';
import NewsActions from '../../src/actions/NewsActions';

chai.use(chaiEnzyme());
const expect = chai.expect;
const dispatcher = sinon.spy(Dispatcher, 'dispatch');

describe('getHeadlines action method using Promises', () => {
  it('should have the dispatcher called ', () => {
    const action = sinon.spy(NewsActions, 'getHeadlines');
    expect(Dispatcher).to.have.been.called;
    action.restore();
    dispatcher.restore();
  });

  it('Should get the news headline event when called', () => {
    sinon.spy(NewsActions, 'getHeadlines');
    expect(dispatcher, {
      type: 'GET_ARTICLES',
      data: 'result',
    });
  });
  dispatcher.restore();
});

describe('News Actions', () => {
  jsdom();

  it('should exist', () => {
    expect(NewsActions).to.exist;
  });

  it('getHeadlines should exist', () => {
    expect(NewsActions.getHeadlines).to.exist;
  });

  it('getHeadlines should be a functon', () => {
    expect(NewsActions.getHeadlines).to.be.a('function');
  });
});
