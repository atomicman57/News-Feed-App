import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';

import Footer from '../../src/components/Footer.jsx';


describe('Footer', () => {
  const wrapper = shallow(<Footer />);

  it('should be a div item', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should contain <footer />', () => {
    expect(wrapper.find('footer')).to.have.length(1);
  });
});
