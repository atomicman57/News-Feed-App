import React from 'react';
import * as firebase from 'firebase';
import { config } from 'dotenv';




class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      listfavourites: [],
      UserId: '',
    };
    this.viewFavourites = this.viewFavourites.bind(this);
  }

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
          ))
        }
        <div className="loader" />
      </div>
    );
  }
}


export default Favourites;


