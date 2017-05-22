import jsdom from 'mocha-jsdom';
import chai from 'chai';
import sinon from 'sinon';
import chaiEnzyme from 'chai-enzyme';
import { describe, it } from 'mocha';

import Dispatcher from './../../src/dispatcher/Dispatcher';
import SourcesActions from '../../src/actions/SourcesAction';

chai.use(chaiEnzyme());
const expect = chai.expect;
const dispatcher = sinon.spy(Dispatcher, 'dispatch');

describe('SoucesAction getSources action method using Promises', () => {
  it('should have the dispatcher called ', () => {
    const action = sinon.spy(SourcesActions, 'getSources');
    expect(dispatcher).to.have.been.called;
    action.restore();
  });

  it('Should get the news source event when called', () => {
    const action = sinon.spy(SourcesActions, 'getSources');
    expect(dispatcher, {
      type: 'GET_SOURCES',
      data: 'result',
    });
    action.restore();
  });
  dispatcher.restore();
});

describe('Sources Actions', () => {
  jsdom();

  it('should exist', () => {
    expect(SourcesActions).to.exist;
  });

  it('getSources should exist', () => {
    expect(SourcesActions.getSources).to.exist;
  });

  it('getSources should be a functon', () => {
    expect(SourcesActions.getSources).to.be.a('function');
  });
});
