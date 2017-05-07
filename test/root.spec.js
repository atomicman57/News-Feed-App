import React from 'react';                     // required to get test to work.  we can get around this later with more configuration
import { shallow } from 'enzyme';              // method from enzyme which allows us to do shallow render
import Header from '../src/components/header';  // import our soon to be component

describe('(Container) Header', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.type()).to.eql('div');
  });

  it('has style with height 100%', () => {
    const wrapper = shallow(<Header />);
    const expectedStyles = {
      height: '100%',
      background: '#333'
    }
    expect(wrapper.prop('style')).to.eql(expectedStyles);
  });

  it('contains a header explaining the app', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.welcome-header')).to.have.length(1);
  });
});