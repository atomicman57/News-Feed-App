import React from 'react';
import { expect } from 'chai';
import dispatcher from '../src/dispatcher/dispatcher';



describe('Dispatcher', () => {

  it('should exist', () => {
    expect(dispatcher).to.exist;
  });

  it('should be an object', () => {
    expect(dispatcher).to.be.an('object');
  });


})




