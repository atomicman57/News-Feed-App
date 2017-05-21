import { expect } from 'chai';
import { describe, it } from 'mocha';

import Dispatcher from './../../src/dispatcher/Dispatcher';

describe('Dispatcher', () => {
  it('should exist', () => {
    expect(Dispatcher).to.exist;
  });

  it('should be an object', () => {
    expect(Dispatcher).to.be.an('object');
  });
});

