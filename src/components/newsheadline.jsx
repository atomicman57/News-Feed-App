import React from 'react';
import queryString from 'query-string';
import * as firebase from 'firebase';
import PropTypes from 'prop-types';

import * as actions from '../actions/newsactions';
import newsstore from '../stores/newsstore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDnINIDjs2Av5eABGZj7dM2X_gffkt7xQI",
  authDomain: "newsprojectatom.firebaseapp.com",
  databaseURL: "https://newsprojectatom.firebaseio.com",
  projectId: "newsprojectatom",
  storageBucket: "newsprojectatom.appspot.com",
  messagingSenderId: "811047390409"
});


class Newsheadline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],
      email: [],
      Id: [],

    };
    this.getHeadlines = this.getHeadlines.bind(this);
    this.addToFavourite = this.addToFavourite.bind(this)
  }

  componentWillMount() {
    const urldata = queryString.parse(this.props.location.search);
    // const { source, sortBy } = urldata;
    const source = urldata.source;
    const sort = urldata.sortBy;
    this.updateHeadlines(source, sort);
    newsstore.on('articles', this.getHeadlines);
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: '811047390409-jvv9pei1sjf8f0d5ojfmig2ovgnrsvgt.apps.googleusercontent.com',
      }).then((auth2) => {
        const GoogleAuth = gapi.auth2.getAuthInstance();
        if (auth2.isSignedIn.get()) {
          const profile = auth2.currentUser.get().getBasicProfile();
          this.setState(
            {
              username: profile.getName(),
              email: profile.getEmail(),
              Id: profile.getId(),
            });
        }
        if (!GoogleAuth.isSignedIn.get()) {
          window.location.href = '/';
        }
      });
    });

  }


  componentWillUnmount() {
    newsstore.removeListener('articles', this.getHeadlines);
  }

  getHeadlines(source, sort) {
    this.setState({
      headlines: newsstore.getArticles(),
    });
    if (this.state.headlines.length <= 0) {
      this.updateHeadlines(source, sort);
    }
  }


  updateHeadlines(source, sort) {
    actions.getHeadlines(source, sort);
  }
  addToFavourite(title, description, author, url, urlToImage) {
    let userId = this.state.Id;
    if (userId != "") {

      firebase.database().ref('favourites').child(userId).push({
        title,
        description,
        author,
        url,
        urlToImage,
      })
      alert("Added to Favourites")
    }
  }
  render() {
    const headlines = this.state.headlines;
    const urldata = queryString.parse(this.props.location.search);
    const sourcename = urldata.name;
    const sorted = urldata.sortBy;

    return (
      <div>
        <h1 id="fnews">{sourcename} {sorted} Headlines </h1>
        <br />

        {headlines.map((info, index) =>
          (<div key={index}>
            <div className="card2" key={index}>
              <img src={info.urlToImage} alt="News Image" style={{ width: `${100}%` }} />
              <div className="container" key={index}>
                <br />
                <h1>{info.title}</h1>
                <p>{info.description}</p>
                <p>Author: {info.author} </p>
                <a href={`#/fullnews?source=${info.url}`} >View More...</a>
                <br /><br />
                <a href={info.url} target="_blank" rel="noopener noreferrer" >
                  View From Source</a>
                <br /><br />
                <button onClick={() => 
                  { this.addToFavourite(info.title, 
                  info.description, 
                  info.author, 
                  info.url, 
                  info.urlToImage) }}>
                  Add to Favourite</button>

                <br />
              </div>
            </div>
          </div>))
        }
        <div className="loader" />
      </div>
    );
  }
}

Newsheadline.propTypes = {
  location: PropTypes.object,
};

export default Newsheadline;

