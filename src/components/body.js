import React from 'react';
import { Route, Redirect } from 'react-router';
import Login from './login';
import Header from './Header';
import * as actions from '../actions/newsactions';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.SignOutHandler = this.SignOutHandler.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  SignOutHandler() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
    });
  }

  checkLogin() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: '811047390409-jvv9pei1sjf8f0d5ojfmig2ovgnrsvgt.apps.googleusercontent.com',
      }).then((auth2) => {
        const GoogleAuth = gapi.auth2.getAuthInstance();
        console.log(GoogleAuth.isSignedIn.get());
        if (GoogleAuth.isSignedIn.get()) {
          window.location.href = '#/dashboard';
        }
      });
    });
  }


  componentWillMount() {
    window.addEventListener('google-loaded', this.checkLogin);
  }


  render() {
    
    return (
      <div>
        <Header />
        <div id="content">
          <div className="wrapper">
            <div className="col-1">
              <div className="section" />
              <div className="col-2">
                <div className="section" />

              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}


export default Body;
