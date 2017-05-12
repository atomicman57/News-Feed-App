import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';


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
        if (GoogleAuth.isSignedIn.get()) {
          reactLocalStorage.set('Logged', 'true');
          window.location.href = '#/dashboard';
        } else { this.renderGoogleLoginButton(); }
      });
    });
  }

  onSignIn(googleUser) {
    window.location.href = '#/dashboard';
    reactLocalStorage.set('Logged', 'true');
    location.reload();
  }

  componentWillMount() {
    window.addEventListener('google-loaded', this.checkLogin);
  }

  componentDidMount() {
    this.renderGoogleLoginButton;
  }

  renderGoogleLoginButton() {
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
          <br /> <br /><br /><br />
           <br/><br/><br/>
          To Get Live News update <br />
          From News Sources Around The World
          <br /><br />
        </h2>
        <h1 id="fnews">Sign-in with Google account</h1>
        <br /> <br /><br /><br />
        <div id="my-signin2" />
      </div>
    );
  }
}

export default Login;
