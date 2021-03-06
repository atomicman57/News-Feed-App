import jsdom from 'mocha-jsdom';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';

import Home from '../../src/components/Home.jsx';

describe('Home ', () => {
  jsdom();

  it('should be a div item', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.type()).to.eql('div');
  });

  it('should have 2 div tag', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('div')).to.have.length(5);
  });

  it('should have 2 p tag', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('p')).to.have.length(3);
  });

  it('should have 1 img tag', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('img')).to.have.length(1);
  });
});
