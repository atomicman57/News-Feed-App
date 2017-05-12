import React from 'react';
import { expect, assert } from 'chai';
import Newsstore from '../src/stores/newsstore';
import dispatcher from '../src/dispatcher/dispatcher';
import sinon from 'sinon';
import axios from 'axios';
import * as NewsAction from '../src/actions/newsactions';
import * as NewsApi from '../src/utils/newsapi';


describe('News Actions', () => {
  


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




