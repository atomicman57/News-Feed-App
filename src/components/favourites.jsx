import React from 'react';
import queryString from 'query-string';
import * as firebase from 'firebase';


class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      listfavourites: [],
      UserId: [],
    };
    this.viewFavourites = this.viewFavourites.bind(this);
  }


  viewFavourites() {
    let userId = this.state.UserId;
    let list = this.state.favourites;
    if (userId != "") {
      const dbref = firebase.database().ref('favourites');
      this.markup = []
      if (list == "") {
        dbref.child(userId).once('value', (snapshot) => {
          const favourites = snapshot.val();
          for (let prop in favourites) {
            this.markup.push(favourites[prop])
          }
          this.setState(
            {
              favourites: this.markup,
            });
        });


      }
    }


  }


  componentWillMount() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: '811047390409-jvv9pei1sjf8f0d5ojfmig2ovgnrsvgt.apps.googleusercontent.com',
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


  componentWillUnmount() {
    firebase.database().ref('favourites').off();
  }





  render() {
    this.viewFavourites();
    let favourites = this.state.favourites;

    return (
      <div>
        <h1 id="fnews">Favourites </h1>
        <br />

        {favourites.map(info =>
          (<div>
            <div className="card">
              <img src={info.urlToImage} alt="News Image" style={{ width: `${100}%` }} />
              <div className="container">
                <br />
                <h1>{info.title}</h1>
                <p>{info.description}</p>
                <p>Author: {info.author} </p>
                <a href={`#/fullnews?source=${info.url}`} >View More...</a>
                <br /><br />

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


export default Favourites;


