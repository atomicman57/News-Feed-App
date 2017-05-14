// import React from 'react';
// import { expect } from 'chai';
// import jsdom from 'mocha-jsdom'
// import sinon from 'sinon';
// import { shallow } from 'enzyme';
// import { EventEmitter } from 'events';

// import NewsStore from './../../src/stores/newsstore';
// import Dispatcher from './../../src/dispatcher/dispatcher';

// const root = new EventEmitter()

// describe('News Store', () => {
//   jsdom()
//   const Articles = {
//     status: "ok",
//     source: "techcrunch",
//     sortBy: "top",
//     "articles": [
//       {
//         "author": "Josh Constine",
//         "title": "Instagram launches mobile web sharing to pursue global growth",
//         'description': "Instagram wants to be the photo app for the whole world, even if you can't or won't download it. In pursuit of international growth where networks are slow..",
//         "url": "https://techcrunch.com/2017/05/08/instagram-mobile-web/",
//         "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/05/instagram-international.png?w=764&h=400&crop=1",
//         "publishedAt": "2017-05-08T19:05:58Z"
//       },
//       {
//         "author": "Ingrid Lunden",
//         "title": "Amazon unveils the $230 Echo Show, with a screen for calls, shipping June 28",
//         "description": "Look out, world: Alexa is coming to a screen near you. Today Amazon unveiled the Echo Show, a WiFi-enabled home device with a seven-inch screen that is the..",
//         "url": "https://techcrunch.com/2017/05/09/amazon-unveils-the-230-echo-show-with-a-screen-for-calls-shipping-june-28/",
//         "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/05/screen-shot-2017-05-09-at-14-33-56.png?w=764&h=400&crop=1",
//         "publishedAt": "2017-05-09T13:35:27Z"
//       }
//     ]
//   }



//   it('should exist', () => {
//     expect(NewsStore).to.exist;
//   });

//   it('should be an object', () => {
//     expect(NewsStore).to.be.an('object');
//   });



//   it('to return articles that is being dispatched', () => {
//     Dispatcher.dispatch({
//       type: 'GET_ARTICLES',
//       headlines: Articles,
//     });
//     expect(NewsStore.getArticles()).to.eql(Articles);

//   });

//   it('to emit articles', () => {
//     Dispatcher.dispatch({
//       type: 'GET_ARTICLES',
//       data: Articles,
//     });
//     expect(NewsStore.emit("getarticles")).to.exist;

//   });


//  it('to return sources that is being dispatched', () => {
//     Dispatcher.dispatch({
//       type: 'GET_SOURCES',
//       sources: Articles,
//     });
//     expect(NewsStore.getSources()).to.eql(Articles);

//   });

//   it('to emit get sources', () => {
//     Dispatcher.dispatch({
//       type: 'GET_SOURCES',
//       data: Articles,
//     });
//     expect(NewsStore.emit("getsources")).to.exist;

//   });


// });

