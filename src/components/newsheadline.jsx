import React from 'react';
import queryString from 'query-string';
import * as firebase from 'firebase';
import PropTypes from 'prop-types';

import NewsActions from '../actions/newsactions';
import NewsStore from '../stores/newsstore';
import { FIREBASE_CONFIG, CLIENT_ID } from '../config/config';

firebase.initializeApp(FIREBASE_CONFIG);

class NewsHeadline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],
      email: [],
      Id: [],

    };
    this.getHeadlines = this.getHeadlines.bind(this);
    this.addToFavourite = this.addToFavourite.bind(this);
    this.back = this.back.bind(this);
  }

  componentDidMount() {
    const urldata = queryString.parse(this.props.location.search);
    const { source, sortBy } = urldata;
    this.updateHeadlines(source, sortBy);
    NewsStore.on('getarticles', this.getHeadlines);
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: CLIENT_ID,
      }).then((auth2) => {
        const GoogleAuth = gapi.auth2.getAuthInstance();
        if (!GoogleAuth.isSignedIn.get()) {
          window.location.href = '/';
        }
      });
    });

  }


  componentWillUnmount() {
    NewsStore.removeListener('getarticles', this.getHeadlines);
  }

  getHeadlines() {
    this.setState({
      headlines: NewsStore.getArticles(),
    });
  }

  back() {
    window.history.back()
  }
  updateHeadlines(source, sort) {
    NewsActions.getHeadlines(source, sort);
  }
  addToFavourite(title, description, author, url, urlToImage) {
    const userId = this.state.Id;
    if (userId != '') {

      firebase.database().ref('SavedNews').child(userId).push({
        title,
        description,
        author,
        url,
        urlToImage,
      });
      alert("News Saved");
    }
  }
  render() {
    const headlines = this.state.headlines;
    const urldata = queryString.parse(this.props.location.search);
    const sourcename = urldata.name;
    const sorted = urldata.sortBy;
    return (
      <div>
        <button onClick={this.back} className="button"> <span> &laquo; Go Back </span></button>
        <h1 id="fnews">{sourcename} {sorted} Headlines </h1>
        <br />

        {headlines.map((info, index) =>
          (<div key={index}>
            <div className="card2" key={index}>
              <img
                src={info.urlToImage}
                alt="News Image"
                style={{ width: `${100}%` }} />
              <div className="container" key={index}>
                <br />
                <h1>{info.title}</h1>
                <p>{info.description}</p>
                <p>Author: {info.author} </p>
                <p>Date: {info.publishedAt} </p>
                <a href={`#/fullnews?source=${info.url}`} >View In App</a>
                <br /><br />
                <a href={info.url} target="_blank" rel="noopener noreferrer" >
                  View From Source</a>
                <br /><br />
                <button
                  onClick={() => {
                    this.addToFavourite(info.title,
                      info.description,
                      info.author,
                      info.url,
                      info.urlToImage);
                  }}>
                  Save Article</button>
                <br /><br /><br /><br />
              </div>
            </div>
          </div>
          ))
        }
        <div className="loader" />
      </div>
    );
  }
}

NewsHeadline.propTypes = {
  location: PropTypes.object,
};

export default NewsHeadline;

