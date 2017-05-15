import React from 'react';
import * as firebase from 'firebase';
import { config } from 'dotenv';

/**
 * Class representing Saved News.
 * @extends React Component
 */
class SavedNews extends React.Component {
  constructor(props) {
    super(props);
    /**
     * Setting the initial state of favourites,
     * listfavourites and UserId to empty
     */
    this.state = {
      favourites: [],
      listfavourites: [],
      UserId: '',
    };

    /**
     * Binding the functions
     */
    this.viewFavourites = this.viewFavourites.bind(this);
  }

  /**
   * Checks if User is Logged in
   * If user is logged in,
   * It get the userID and set the state of Id
   * The Id is use to retrieve saved news from firebase
   * for the particular user.
   * else it redirect to home page which is login page
   */
  componentDidMount() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: process.env.CLIENT_ID,
      }).then((auth2) => {
        const GoogleAuth = gapi.auth2.getAuthInstance();
        if (auth2.isSignedIn.get()) {
          const profile = auth2.currentUser.get().getBasicProfile();
          this.setState(
            {
              UserId: profile.getId(),
            })
        }
        if (!GoogleAuth.isSignedIn.get()) {
          window.location.href = '/';
        }
      })
    })
  }


  /**
   * View Favourite Function
   * It retrieve saved news from firebase
   * it uses the userId to get the saved news
   * of the current user.
   * and it saves it in a state(favourites)
   */
  viewFavourites() {
    const userId = this.state.UserId;
    const list = this.state.favourites;
    if (userId != []) {
      const dbref = firebase.database().ref('SavedNews');
      this.favourite = [];
      if (list == '') {
        dbref.child(userId).once('value', (snapshot) => {
          const favourites = snapshot.val();
          for (let prop in favourites) {
            this.favourite.push(favourites[prop]);
          }
          this.setState(
            {
              favourites: this.favourite,
            });
        });
      }

    }
  }

  /**
   * On unmounting, it stops the firebase
   */
  componentWillUnmount() {
    firebase.database().ref('SavedNews').off();
  }

  render() {
    this.viewFavourites();
    const favourites = this.state.favourites;
    return (
      <div>
        <h1 id="fnews">Saved News </h1>
        <br />
        {favourites.map(info =>
          (<div>
            <div className="card2">
              <img src={info.urlToImage} alt="News Image" style={{ width: `${100}%` }} />
              <div className="container">
                <br />
                <h1>{info.title}</h1>
                <p>{info.description}</p>
                <p>Author: {info.author} </p>
                <a href={`#/fullnews?source=${info.url}`} >View In App</a>
                <br /><br />
                <br />
              </div>
            </div>
          </div>
          )
         )
        }
        <div className="loader" />
      </div>
    );
  }
}


export default SavedNews;


