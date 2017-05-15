import React from 'react';
import { expect } from 'chai';
import jsdom from 'mocha-jsdom'
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { EventEmitter } from 'events';

import Articles from './StoreTestData';
import NewsStore from './../../src/stores/newsstore';
import Dispatcher from './../../src/dispatcher/dispatcher';

const root = new EventEmitter()

describe('News Store', () => {
  jsdom()

  it('should exist', () => {
    expect(NewsStore).to.exist;
  });

  it('should be an object', () => {
    expect(NewsStore).to.be.an('object');
  });



  it('to return articles that is being dispatched', () => {
    Dispatcher.dispatch({
      type: 'GET_ARTICLES',
      headlines: Articles,
    });
    expect(NewsStore.getArticles()).to.eql(Articles);

  });

  it('to emit articles', () => {
    Dispatcher.dispatch({
      type: 'GET_ARTICLES',
      data: Articles,
    });
    expect(NewsStore.emit("getarticles")).to.exist;

  });


 it('to return sources that is being dispatched', () => {
    Dispatcher.dispatch({
      type: 'GET_SOURCES',
      sources: Articles,
    });
    expect(NewsStore.getSources()).to.eql(Articles);

  });

  it('to emit get sources', () => {
    Dispatcher.dispatch({
      type: 'GET_SOURCES',
      data: Articles,
    });
    expect(NewsStore.emit("getsources")).to.exist;

  });


});

