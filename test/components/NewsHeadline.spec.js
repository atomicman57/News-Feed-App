import jsdom from 'mocha-jsdom';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';

import NewsHeadline from './../../src/components/NewsHeadline.jsx';

describe('NewsHeadlines ', () => {
  const wrapper = shallow(<NewsHeadline location={{ search: 'source?' }} />);
  jsdom();

  it('should be a div item', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should have 2 div tag', () => {
    expect(wrapper.find('div')).to.have.length(2);
  });

  it('Should have an initial state for Headlines', () => {
    expect(wrapper.state().headlines).to.deep.equal([]);
  });

  it('Should have an updated email state', () => {
    expect(wrapper.setState({ aa: 'bb' }).email).to.have.length.not.to.equal(0);
  });

  it('Should have an updated Headlines state', () => {
    expect(wrapper.setState({ aa: 'bb' }).headlines).to.have.length.not.to.equal(0);
  });

  it('Should have a button that handles go Back event', () => {
    expect(wrapper.find('button')).to.be.defined;
  });
});

