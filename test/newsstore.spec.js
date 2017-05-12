var jsdom = require('mocha-jsdom')
import React from 'react';
import { expect } from 'chai';
import Newsstore from '../src/stores/newsstore';
import dispatcher from '../src/dispatcher/dispatcher';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { EventEmitter } from 'events';
var sinonStubPromise = require('sinon-stub-promise');
sinonStubPromise(sinon);
var root = new EventEmitter()



describe('News Store', () => {
  jsdom()
  const Articles = {
    "status": "ok",
    "source": "techcrunch",
    "sortBy": "top",
    "articles": [
      {
        "author": "Josh Constine",
        "title": "Instagram launches mobile web sharing to pursue global growth",
        "description": "Instagram wants to be the photo app for the whole world, even if you can't or won't download it. In pursuit of international growth where networks are slow..",
        "url": "https://techcrunch.com/2017/05/08/instagram-mobile-web/",
        "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/05/instagram-international.png?w=764&h=400&crop=1",
        "publishedAt": "2017-05-08T19:05:58Z"
      },
      {
        "author": "Ingrid Lunden",
        "title": "Amazon unveils the $230 Echo Show, with a screen for calls, shipping June 28",
        "description": "Look out, world: Alexa is coming to a screen near you. Today Amazon unveiled the Echo Show, a WiFi-enabled home device with a seven-inch screen that is the..",
        "url": "https://techcrunch.com/2017/05/09/amazon-unveils-the-230-echo-show-with-a-screen-for-calls-shipping-june-28/",
        "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/05/screen-shot-2017-05-09-at-14-33-56.png?w=764&h=400&crop=1",
        "publishedAt": "2017-05-09T13:35:27Z"
      }
    ]
  }



  it('should exist', () => {
    expect(Newsstore).to.exist;
  });

  it('should be an object', () => {
    expect(Newsstore).to.be.an('object');
  });



  it('to return articles that is being dispatched', () => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      data: Articles
    });
    expect(Newsstore.getArticles()).to.eql(Articles);

  });

  it('to emit articles', () => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      data: Articles
    });
    expect(Newsstore.emit("articles")).to.exist;

  });


});

