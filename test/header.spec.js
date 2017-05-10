var jsdom = require('mocha-jsdom')
import React from 'react';
import Header from '../src/components/header';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';


describe('Header ', () => {
 jsdom()
    it('should have 1 h1 tag', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1')).to.have.length(1);
    });

it('should have 1 h2 tag', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h2')).to.have.length(1);
    });


it('should have 1 nav tag', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('nav')).to.have.length(1);
    });

   it('should contain <header />', () => {  
     const wrapper = shallow(<Header />);
    expect(wrapper.find('header')).to.have.length(1);
  });

});
