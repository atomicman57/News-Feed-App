import React from 'react';


class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.SignOutHandler = this.SignOutHandler.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }


  componentWillMount() {
    window.addEventListener('google-loaded', this.checkLogin);
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
        } else { window.location.href = '#/'; }
      });
    });
  }

  render() {
    return (
      <div />
    );
  }
}


export default Body;
