import jsdom from 'mocha-jsdom'
import React from 'react';
import chai from 'chai';
import { expect, assert } from 'chai';
import sinon from 'sinon';
import {mount, render, shallow} from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import { EventEmitter } from 'events'
import NewsActions from './../../src/actions/NewsActions';
chai.use(chaiEnzyme())
const root = new EventEmitter()




describe('News Actions', () => {
  jsdom()
  


  it('should exist', () => {
    expect(NewsActions).to.exist;
  });

  it('getHeadlines should exist', () => {
    expect(NewsActions.getHeadlines).to.exist;
  });


  it('getHeadlines should be a functon', () => {
    expect(NewsActions.getHeadlines).to.be.a('function');
  });

  it('getSources should be a functon', () => {
      NewsActions.getSources()
    expect(NewsActions.getSources).to.be.a('function');
  });

  it('getSources should be a functon', () => {
   NewsActions.getHeadlines()
    expect(NewsActions.getSources).to.be.a('function');
  });
})




