import React from 'react';
import queryString from 'query-string';
import * as firebase from 'firebase';
import PropTypes from 'prop-types';

import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';

/**
 * Firebase Configuration
 */

const FIREBASE_CONFIG = {
  apiKey: process.env.FIREBASE_API,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: 'https://newsprojectatom.firebaseio.com',
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
};

firebase.initializeApp(FIREBASE_CONFIG);

/**
 * Class representing News Headline.
 * @extends React Component
 */

class NewsHeadline extends React.Component {
  constructor(props) {
    super(props);

    /**
     * Setting the initial state of Headline,
     * email and Id to empty
     */

    this.state = {
      headlines: [],
      email: [],
      Id: []
    };

    /**
     * Binding the functions
     */

    this.getHeadlines = this.getHeadlines.bind(this);
    this.addToFavourite = this.addToFavourite.bind(this);
    this.back = this.back.bind(this);
  }

  /**
 * On mounting of the component,
 * Get the url data from the url and parse
 * From the url data, source and sortBy is gotten,
 * Which will be use to intiate actions
 * The store should listen for "getarticles" event
 * And then calls the get Headlines function
 * There is also a check if the user accessing the page
 * is logged in, if not redirect back to homepage,
 * If the user is logged in, get the User Id for firebase
 * Saving of Articles.
 */

  componentDidMount() {
    const urldata = queryString.parse(this.props.location.search);
    const { source, sortBy } = urldata;
    this.updateHeadlines(source, sortBy);
    NewsStore.on('getarticles', this.getHeadlines);
    gapi.load('auth2', () => {
      gapi.auth2
        .init({
          client_id: process.env.CLIENT_ID
        })
        .then((auth2) => {
          const GoogleAuth = gapi.auth2.getAuthInstance();
          if (GoogleAuth.isSignedIn.get()) {
            const profile = auth2.currentUser.get().getBasicProfile();
            this.setState({
              Id: profile.getId()
            });
          } else {
            window.location.href = '/';
          }
        });
    });
  }

  /**
 * On Unmounting of the component,
 * The event should be removed to avoid, memory leak
 */

  componentWillUnmount() {
    NewsStore.removeListener('getarticles', this.getHeadlines);
  }

  /**
 * Get Headlines Function
 * This function update the headlines state,
 * with headlines data gotten from the store,
 */

  getHeadlines() {
    this.setState({
      headlines: NewsStore.getArticles()
    });
  }

  /**
 * Back button function
 * Use to go back in history
 */

  back() {
    window.history.back();
  }

  /**
 * Update Headlines Function
 * @param {string} source - The News source e.g BBC.
 * @param {string} sort - The sort type e.g top, latest.
 * This function initiate the actions,
 * it calls the News Actions get Headlines,
 */

  updateHeadlines(source, sort) {
    NewsActions.getHeadlines(source, sort);
  }

  /**
 * Add to Favourite Function
 * @param {string} title - The title of the news to be saved
 * @param {string} description - The description of the news to be saved
 * @param {string} author - The author of the articles/news
 * @param {string} url - The url of the news
 * @param {string} urlToImage - The url to the image of the news
 * This function saves the news to firebase ref "SavedNews",
 * with the user Id, so as to identify each user
 * After that it alert the user that the news have been saved,
 */

  addToFavourite(title, description, author, url, urlToImage) {
    const userId = this.state.Id;
    if (userId != '') {
      firebase.database().ref('SavedNews').child(userId).push({
        title,
        description,
        author,
        url,
        urlToImage
      });
      alert('News Saved');
    }
  }
  render() {
    /**
     * The headlines object/array
     */

    const headlines = this.state.headlines;

    /**
     * The url data gotten from the url
     */

    const urldata = queryString.parse(this.props.location.search);
    const sourcename = urldata.name;
    const sorted = urldata.sortBy;
    return (
      <div>
        <button onClick={this.back} className="button">
          <span> « Go Back </span>
        </button>
        <h1 id="fnews">{sourcename} {sorted} Headlines </h1>
        <br />

        {headlines.map((info, index) => (
          <div key={index}>
            <div className="card2" key={index}>
              <img
                src={info.urlToImage}
                alt="News Image"
                style={{ width: `${100}%` }}
              />
              <div className="container" key={index}>
                <br />
                <h1>{info.title}</h1>
                <p>{info.description}</p>
                <p>Author: {info.author} </p>
                <p>Date: {info.publishedAt} </p>
                <a href={`#/fullnews?source=${info.url}`}>View In App</a>
                <br /><br />
                <a href={info.url} target="_blank" rel="noopener noreferrer">
                  View From Source
                </a>
                <br /><br />
                <button
                  onClick={() => {
                    this.addToFavourite(
                      info.title,
                      info.description,
                      info.author,
                      info.url,
                      info.urlToImage
                    );
                  }}
                >
                  Save Article
                </button>
                <br /><br /><br /><br />
              </div>
            </div>
          </div>
        ))}
        <div className="loader" />
      </div>
    );
  }
}

NewsHeadline.propTypes = {
  location: PropTypes.object
};

export default NewsHeadline;
