import { config } from 'dotenv';
import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSignIn = this.onSignIn.bind(this);
    this.renderGoogleLoginButton = this.renderGoogleLoginButton.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }


  checkLogin() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: process.env.CLIENT_ID,
      }).then((auth2) => {
        const GoogleAuth = gapi.auth2.getAuthInstance();
        if (GoogleAuth.isSignedIn.get()) {
          reactLocalStorage.set('Logged', 'true');
          window.location.href = '#/dashboard';
        } else {
          reactLocalStorage.clear();
          this.renderGoogleLoginButton();
        }
      });
    });
  }

  onSignIn(googleUser) {
    window.location.href = '#/dashboard';
    reactLocalStorage.set('Logged', 'true');
    location.reload();
  }

  componentDidMount() {
    window.addEventListener('google-loaded', this.checkLogin);
  }



  renderGoogleLoginButton() {
    gapi.signin2.render('my-signin2', {
      scope: 'https://www.googleapis.com/auth/plus.login',
      width: 300,
      height: 80,
      longtitle: true,
      theme: 'dark',
      onsuccess: this.onSignIn,
    });

    gapi.load('auth2', () => {
      gapi.auth2.init();
    });
  }

  render() {
    return (
      <span id="my-signin2" />
    );
  }
}

export default Login;
