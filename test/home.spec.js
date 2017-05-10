var jsdom = require('mocha-jsdom')
import React from 'react';
import Home from '../src/components/home.jsx';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { EventEmitter } from 'events';
  const root = new EventEmitter()

describe('Home ', () => {
 jsdom()
    it('should have 1 h2 tag', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find('h1')).to.have.length(1);
    });

it('should be a div item', () => {
     const wrapper = shallow(<Home />);
    expect(wrapper.type()).to.eql('div');
  });


    it('should have 2 div tag', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find('div')).to.have.length(2);
    });

    it('should have 2 p tag', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find('p')).to.have.length(2);
    });

     it('should have 1 img tag', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find('img')).to.have.length(1);
    });

});
