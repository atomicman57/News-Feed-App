import React from 'react';
import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';

import Dashboard from '../../src/components/Dashboard';

describe('Dashboard ', () => {
  jsdom();

  it('should be a div item', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.type()).to.eql('div');
  });

  it('should have 1 div tag', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('div')).to.have.length(3);
  });

  it('renders an `#maincon`', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('#maincon')).to.have.length(1);
  });

  it('should have 1 h3 tag', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('h3')).to.have.length(1);
  });
});

