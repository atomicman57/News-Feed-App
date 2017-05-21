import jsdom from 'mocha-jsdom';
import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { describe, it } from 'mocha';

import Login from './../../src/components/Login';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('Login ', () => {
  jsdom();
  it('should have 1 span tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('span')).to.have.length(1);
  });

  it('should be a span item', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.type()).to.eql('span');
  });

  it('should have 1 div tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('span')).to.have.length(1);
  });

  it('should have props for checkLogin and onSignIn', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.props().checkLogin).to.be.defined;
    expect(wrapper.props().onSignIn).to.be.defined;
    expect(wrapper.props().renderGoogleLoginButton).to.be.defined;
  });
  it('should have 2 div tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).to.have.id('my-signin2');
  });

  it('Should have a component did mount function', () => {
    const wrapper = shallow(<Login />);
    wrapper.instance().componentDidMount();
  });

  it('Should have a onSignIn function', () => {
    const wrapper = shallow(<Login />);
    wrapper.instance().onSignIn();
  });
});
