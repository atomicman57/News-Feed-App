
var jsdom = require('mocha-jsdom')
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { EventEmitter } from 'events';
import Newssources from '../src/components/newssources.jsx';
var root = new EventEmitter()

describe('Newssources ', () => {
    jsdom()

    it('should have 1 input tag', () => {
        const wrapper = shallow(<Newssources />);
        expect(wrapper.find('input')).to.have.length(1);
    });


    it('should be a div item', () => {
        const wrapper = shallow(<Newssources />);
        expect(wrapper.type()).to.eql('div');
    });


    it('should have 2 div tag', () => {
        const wrapper = shallow(<Newssources />);
        expect(wrapper.find('div')).to.have.length(2);
    });

});


