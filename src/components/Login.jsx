import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSignIn = this.onSignIn.bind(this);
    this.renderGoogleLoginButton = this.renderGoogleLoginButton.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

/*
  * If google api is loaded,
  * and call check login function
  */
  componentDidMount() {
    window.addEventListener('google-loaded', this.checkLogin);
  }

  /**
 * On Sign In
 * @param {object} googleUser - Google User object
 * This function handle the user login if sucessful,
 * it redirect the user to dashboard if logged in,
 */

  onSignIn() {
    window.location.href = '#/dashboard';
    reactLocalStorage.set('Logged', 'true');
    location.reload();
  }

  /**
   * Checks if User is Logged in
   * If user is logged in,
   * and set localstorage Logged to true
   * and redirect to dashboard
   * else it render Google Login Button
   */

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

  /**
   *  Render Google Login Button Function
   * It renders the Google Login Button
   * It also handles if the login is successful
   * it calls a function(onSignIn)
   */

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
