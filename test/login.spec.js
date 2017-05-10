var jsdom = require('mocha-jsdom')
import React from 'react';
import Login from '../src/components/login.jsx';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { EventEmitter } from 'events';
const root = new EventEmitter()

describe('Login ', () => {
    jsdom()
    it('should have 1 h2 tag', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('h2')).to.have.length(1);
    });

    it('should be a div item', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.type()).to.eql('div');
    });


    it('should have 2 div tag', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('div')).to.have.length(2);
    });

});
