import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, browserHistory, IndexRoute } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSignIn = this.onSignIn.bind(this);
    this.renderGoogleLoginButton = this.renderGoogleLoginButton.bind(this);
  }

  renderGoogleLoginButton() {
    console.log('rendering google signin button');
    gapi.signin2.render('my-signin2', {
      scope: 'https://www.googleapis.com/auth/plus.login',
      width: 200,
      height: 50,
      longtitle: true,
      theme: 'light',
      onsuccess: this.onSignIn,
    });

    gapi.load('auth2', () => {
      gapi.auth2.init();
    });
  }


  onSignIn(googleUser) {
    console.log(googleUser.getBasicProfile());
    window.location.href = '#/dashboard';
    sessionStorage.setItem('Logged', 'true');
    location.reload();
  }

  render() {
    this.renderGoogleLoginButton();

    return (
      <div className="container">
        <h2 className="form-signin-heading">
          Sign-in with Google account required
          <br/>
        </h2>
        <div id="my-signin2" />
      </div>
    );
  }
}

export default Login;
