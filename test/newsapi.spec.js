import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import dispatcher from '../src/dispatcher/dispatcher';
import * as NewsApi from '../src/utils/newsapi';


describe('News Api', () => {

  it('should exist', () => {
    expect(NewsApi).to.exist;
  });

 it('getSources should exist', () => {
    expect(NewsApi.getSources).to.exist;
  });


  it('getHeadlines should be a functon', () => {
    expect(NewsApi.getHeadlines).to.be.a('function');
  });

it('getSources should be a functon', () => {
    expect(NewsApi.getSources).to.be.a('function');
  });

// it('getSources should be a functon', () => {
//     sinon.stub(axios, 'get');
// //make a request using axios.get()
// NewsApi.getSources();
// // expect that axios.get() was called once
// expect(axios.get.callCount).to.equal(1);
//   });



})




