var jsdom = require('mocha-jsdom')
import React from 'react';
import chai from 'chai';
import { expect, assert } from 'chai';
import sinon from 'sinon';
import {mount, render, shallow} from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import { EventEmitter } from 'events'
import NewsActions from '../../src/actions/NewsActions';
chai.use(chaiEnzyme())
const root = new EventEmitter()




describe('News Actions', () => {
  jsdom()
  


  it('should exist', () => {
    expect(NewsAction).to.exist;
  });

  it('getHeadlines should exist', () => {
    expect(NewsAction.getHeadlines).to.exist;
  });


  it('getHeadlines should be a functon', () => {
    expect(NewsAction.getHeadlines).to.be.a('function');
  });

  it('getSources should be a functon', () => {
      NewsAction.getSources()
    expect(NewsAction.getSources).to.be.a('function');
  });

  it('getSources should be a functon', () => {
   NewsAction.getHeadlines()
    expect(NewsAction.getSources).to.be.a('function');
  });
})




