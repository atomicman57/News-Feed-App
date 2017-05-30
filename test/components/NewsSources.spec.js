import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';
import jsdom from 'mocha-jsdom';

import NewsSources from './../../src/components/NewsSources.jsx';

describe('NewsSources ', () => {
  const wrapper = shallow(<NewsSources />);
  jsdom();

  it('should have 1 input tag', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should be a div item', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should have 2 div tag', () => {
    expect(wrapper.find('div')).to.have.length(2);
  });

  it('Should have an initial state for search string', () => {
    expect(wrapper.state().searchString).to.equal('');
  });

  it('Should have an updated source state', () => {
    expect(
      wrapper.setState({
        aa: 'bb'
      }).sources
    ).to.have.length.not.to.equal(0);
  });

  it('Should have an updated searchString state', () => {
    expect(
      wrapper.setState({
        aa: 'bb'
      }).searchString
    ).to.have.length.not.to.equal(0);
  });

  it('Should have a button that handles go Back event', () => {
    expect(wrapper.find('button')).to.be.defined;
  });
});
