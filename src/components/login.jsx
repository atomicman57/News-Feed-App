import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, browserHistory, IndexRoute } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSignIn = this.onSignIn.bind(this);
    this.renderGoogleLoginButton = this.renderGoogleLoginButton.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
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
        } else { this.renderGoogleLoginButton(); }
      });
    });
  }

  onSignIn(googleUser) {
    console.log(googleUser.getBasicProfile());
    window.location.href = '#/dashboard';
    localStorage.setItem('Logged', 'true');
    location.reload();
  }

  componentWillMount() {
    window.addEventListener('google-loaded', this.checkLogin);
  }

  componentDidMount() {
    this.renderGoogleLoginButton;
  }

  renderGoogleLoginButton() {
    console.log('rendering google signin button');
    gapi.signin2.render('my-signin2', {
      scope: 'https://www.googleapis.com/auth/plus.login',
      width: 400,
      height: 80,
      longtitle: true,
      theme: 'light',
      onsuccess: this.onSignIn,
    });

    gapi.load('auth2', () => {
      gapi.auth2.init();
    });
  }

  render() {
    return (
      <div className="container">
        <h2 className="form-signin-heading">
          Sign-in with Google account
          <br /> <br /><br /><br />
          {this.renderGoogleLoginButton}
          <br />
        </h2>
        <div id="my-signin2" />
      </div>
    );
  }
}

export default Login;
