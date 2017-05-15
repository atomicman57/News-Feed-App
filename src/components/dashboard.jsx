import React from 'react';
import NewsSources from './newssources.jsx';

import { config } from 'dotenv';

// import { CLIENT_ID } from '../config/config';


class Dashboard extends React.Component {
  constructor() {
    super();
    this.checkLogin = this.checkLogin.bind(this);
  }

  componentDidMount() {
    window.addEventListener('google-loaded', this.checkLogin);
  }


  checkLogin() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: process.env.CLIENT_ID,
      }).then((auth2) => {
        const GoogleAuth = gapi.auth2.getAuthInstance();
        if (auth2.isSignedIn.get()) {
          const profile = auth2.currentUser.get().getBasicProfile();
          this.setState(
            {
              username: profile.getName(),
              email: profile.getEmail(),
            });
        }
        if (GoogleAuth.isSignedIn.get()) {
         
        } else {
             window.location.href = '/';
        }
      });
    });
  }


  render() {
    return (
      <div>
        <div id="maincon">
          <div id="mainstart">
            <br />

            <br />
            <h3>Select a News Source </h3>

            <br />
          </div>
          <NewsSources />

        </div>

      </div>
    );
  }
}


export default Dashboard;

