import React from 'react';
import { expect } from 'chai';
import Newsstore from '../src/stores/newsstore';
import dispatcher from '../src/dispatcher/dispatcher';



describe('News Store', () => {
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


describe('News Store', () => {

  const Sources = {
    "status": "ok",
    "sources": [
      {
        "id": "abc-news-au",
        "name": "ABC News (AU)",
        "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
        "url": "http://www.abc.net.au/news",
        "category": "general",
        "language": "en",
        "country": "au",
        "urlsToLogos": {
          "small": "",
          "medium": "",
          "large": ""
        },
        "sortBysAvailable": [
          "top"
        ]
      },
      {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English",
        "description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
        "url": "http://www.aljazeera.com",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
          "small": "",
          "medium": "",
          "large": ""
        },
        "sortBysAvailable": [
          "top",
          "latest"
        ]
      }
    ]
  }
  // it('to return souces that is being dispatched', () => {
  //   dispatcher.dispatch({
  //     type: 'GET_SOURCE',
  //     data: Sources
  //   });
  //   expect(Newsstore.getSources()).to.eql(Sources);

  // });

  it('to emit sources', () => {
    dispatcher.dispatch({
      type: 'GET_SOURCE',
      data: Sources
    });
    expect(Newsstore.emit('sources')).to.exist;

  });
})

    