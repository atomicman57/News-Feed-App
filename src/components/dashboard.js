import React from 'react';
import axios from 'axios';
import Newssources from './newssources';
import { getSources, getHeadline } from '../utils/newsapi.js';


class Dashboard extends React.Component {


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
        console.log(GoogleAuth.isSignedIn.get());
        if (!GoogleAuth.isSignedIn.get()) {
          window.location.href = '/';
        }
      });
    });
  }


  render() {
    return (
      <div>
        <h1>News Dashboard </h1>
        <br />
        <h3>Select a News Source </h3>
        <br />
        <h1>Sources!</h1>
        <Newssources />


      </div>
    );
  }
}


export default Dashboard;

