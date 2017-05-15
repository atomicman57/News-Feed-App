
var jsdom = require('mocha-jsdom')
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { EventEmitter } from 'events';

import NewsSources from './../../src/components/newssources.jsx';
var root = new EventEmitter()

describe('NewsSources ', () => {
    const wrapper = shallow(<NewsSources />);
    jsdom()

    it('should have 1 input tag', () => {
        const wrapper = shallow(<NewsSources />);
        expect(wrapper.find('input')).to.have.length(1);
    });

    it('should be a div item', () => {
        const wrapper = shallow(<NewsSources />);
        expect(wrapper.type()).to.eql('div');
    });


    it('should have 2 div tag', () => {
        const wrapper = shallow(<NewsSources />);
        expect(wrapper.find('div')).to.have.length(2);
    });

     it('Should have an initial state for search string', () => {
    expect(wrapper.state().searchString).to.equal('');
  });

  it('Should have an updated source state', () => {
    expect(wrapper.setState({aa:"bb"}).sources).to.have.length.not.to.equal(0);
  })

   it('Should have an updated searchString state', () => {
    const wrapper = shallow(<NewsSources />);
    expect(wrapper.setState({aa:"bb"}).searchString).to.have.length.not.to.equal(0);
  });

   it('Should have a button that handles go Back event', () => {
    expect(wrapper.find('button')).to.be.defined;
  });
});


