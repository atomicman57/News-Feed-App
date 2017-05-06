import React from 'react';
import Newssources from './newssources';
import { getSources, getHeadline } from '../utils/newsapi.js';


class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: ''
    }
    this.checkLogin = this.checkLogin.bind(this)
  }

  componentDidMount() {
    window.addEventListener('google-loaded', this.checkLogin);
  }


  checkLogin() {
    gapi.load('auth2', () => {
      console.log('Loaded');
      gapi.auth2.init({
        client_id: '811047390409-jvv9pei1sjf8f0d5ojfmig2ovgnrsvgt.apps.googleusercontent.com',
      }).then((auth2) => {
        const GoogleAuth = gapi.auth2.getAuthInstance();
        if (auth2.isSignedIn.get()) {

          let profile = auth2.currentUser.get().getBasicProfile();
          console.log('ID: ' + profile.getId());
          console.log('Full Name: ' + profile.getName());
          console.log('Given Name: ' + profile.getGivenName());
          console.log('Family Name: ' + profile.getFamilyName());
          console.log('Image URL: ' + profile.getImageUrl());
          console.log('Email: ' + profile.getEmail());
          let _this = this;
          this.setState(
            {
              username: profile.getName(),
              email: profile.getEmail(),
            })

        }

        console.log(GoogleAuth.isSignedIn.get());




        if (!GoogleAuth.isSignedIn.get()) {
          window.location.href = '/';
        }
      });
    });
  }


  render() {
    const username = this.state.username;
    const email = this.state.email;
    return (
      <div>
        <div id="maincon">
          <div id="mainstart">
            <h1> Welcome {username},  </h1>
            {email}
            <br />

            <br />
            <h3>Select a News Source </h3>

            <br />
          </div>
          <Newssources />

        </div>

      </div>
    );
  }
}


export default Dashboard;

