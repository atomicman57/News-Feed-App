
var jsdom = require('mocha-jsdom')
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { EventEmitter } from 'events';
import Newsheadline from '../src/components/newsheadline.jsx';
var root = new EventEmitter()

describe('News Headline ', () => {
    jsdom()

    it('should have 1 input tag', () => {
        const wrapper = shallow(<Newsheadline />);
        expect(wrapper.find('input')).to.have.length(1);
    });


    it('should be a div item', () => {
        const wrapper = shallow(<Newsheadline />);
        expect(wrapper.type()).to.eql('div');
    });


    it('should have 2 div tag', () => {
        const wrapper = shallow(<Newsheadline />);
        expect(wrapper.find('div')).to.have.length(2);
    });

});


