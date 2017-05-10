var jsdom = require('mocha-jsdom')
import React from 'react';
import Login from '../src/components/login';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { EventEmitter } from 'events';
import Dashboard from '../src/components/dashboard.jsx';
var root = new EventEmitter()

describe('Dashboard ', () => {
    jsdom()


    it('should be a div item', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.type()).to.eql('div');
    });


    it('should have 1 div tag', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find('div')).to.have.length(3);
    });

     it('should have 1 h1 tag', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find('h1')).to.have.length(1);
    });

     it('should have 1 h3 tag', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find('h3')).to.have.length(1);
    });

    
});


