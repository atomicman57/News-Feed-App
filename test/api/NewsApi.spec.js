import { expect, assert } from 'chai';
import sinon from 'sinon';
import NewsApi from '../../src/utils/newsapi';


describe('News Api', () => {

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



  it('should exist', () => {
    expect(NewsApi).to.exist;
  });

  it('getSources should exist', () => {
    expect(NewsApi.getSources).to.exist;
  });

  it('getHeadlines should be a functon', () => {
    expect(NewsApi.getHeadlines).to.be.a('function');
  });

  it('getSources should be a functon', () => {
    expect(NewsApi.getSources).to.be.a('function');
  });

  it('getHeadlines should return data from API', () => {
    sinon.stub(NewsApi, "getHeadlines").yieldsTo("success", Articles)
    NewsApi.getHeadlines({
      success: (data) => {
        assert.deepEqual(Articles, data);
      }
    })
    NewsApi.getHeadlines.restore();
  })

  it('getSources should return data from API', () => {
    sinon.stub(NewsApi, "getSources").yieldsTo("success", Sources)
    NewsApi.getSources({
      success: (data) => {
        assert.deepEqual(Sources, data);
      }
    })
    NewsApi.getSources.restore();
  })

})




