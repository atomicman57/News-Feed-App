var jsdom = require('mocha-jsdom')
import React from 'react';
import { expect } from 'chai';
import chai from 'chai';
import {mount, render, shallow} from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon';
import { EventEmitter } from 'events';

chai.use(chaiEnzyme())

import Login from '../../src/components/Login';
const root = new EventEmitter()

describe('Login ', () => {
    jsdom()
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

    it('should have props for checkLogin and onSignIn', function () {
        const wrapper = shallow(<Login />);
        expect(wrapper.props().checkLogin).to.be.defined;
        expect(wrapper.props().onSignIn).to.be.defined;
        expect(wrapper.props().renderGoogleLoginButton).to.be.defined;
    });
    it('should have 2 div tag', () => {
        const wrapper = shallow(<Login />)
        expect(wrapper).to.have.id('my-signin2')
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
