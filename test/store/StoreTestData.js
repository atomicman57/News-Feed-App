export const Articles = {
  status: 'ok',
  source: 'techcrunch',
  sortBy: 'top',
  articles: [
    {
      author: 'Josh Constine',
      title: 'Instagram launches mobile web sharing to pursue global growth',
      description: 'Instagram wants to be the photo app for the whole world',
      url: 'https://techcrunch.com/2017/05/08/instagram-mobile-web/',
      urlToImage: 'https://tctechcrunch2011.files.wordpress.com/2017/05/',
      publishedAt: '2017-05-08T19:05:58Z',
    },
    {
      author: 'Ingrid Lunden',
      title: 'Amazon unveils the $230 Echo Show, with a screen for calls',
      description: 'Look out, world: Alexa is coming to a screen near you.',
      url: 'https://techcrunch.com/2017/05/09/amazon-unveils-the-230-echo/',
      urlToImage: 'https://tctechcrunch2011.files.wordpress.com/2017/05/',
      publishedAt: '2017-05-09T13:35:27Z',
    },
  ],
};

export const Sources = {
  status: 'ok',
  sources: [
    {
      id: 'abc-news-au',
      name: 'ABC News (AU)',
      description: 'Australias most trusted source of local, national',
      url: 'http://www.abc.net.au/news',
      category: 'general',
      language: 'en',
      country: 'au',
      urlsToLogos: {
        small: '',
        medium: '',
        large: '',
      },
      sortBysAvailable: [
        'top',
      ],
    },
    {
      id: 'al-jazeera-english',
      name: 'Al Jazeera English',
      description: 'News, analysis from the Middle East and worldwide',
      url: 'http://www.aljazeera.com',
      category: 'general',
      language: 'en',
      country: 'us',
      urlsToLogos: {
        small: '',
        medium: '',
        large: '',
      },
      sortBysAvailable: [
        'top',
        'latest',
      ],
    },
  ],
};
