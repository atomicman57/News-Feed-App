import React from 'react';
import {
  Link,
  HashRouter,
} from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';
import { CLIENT_ID } from '../config/config';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      logged: '',
    };
    this.SignOutHandler = this.SignOutHandler.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  componentDidMount() {
    window.addEventListener('google-loaded', this.checkLogin);
  }

  SignOutHandler() {
    const auth2 = gapi.auth2.getAuthInstance();
    location.reload();
    auth2.signOut().then(() => {
      reactLocalStorage.clear();
    });
  }

  checkLogin() {
    gapi.load('auth2', () => {
      gapi.auth2.init(
        {
          client_id: CLIENT_ID,
        }).then((auth2) => {
          const GoogleAuth = gapi.auth2.getAuthInstance();
          if (GoogleAuth.isSignedIn.get()) {
            reactLocalStorage.set('Logged', 'true');
            const profile = auth2.currentUser.get().getBasicProfile();
            this.setState(
              {
                username:  `Welcome ${profile.getName()}`,
                email: profile.getEmail(),
                logged: 'true',
              });
          } else {
            reactLocalStorage.clear();
          }
        });
    });
  }
  reloadme() {
    location.reload();
  }
  render() {
    const Logged = this.state.logged;
    if (Logged === 'true') {
      this.navbar = (<div>
        <li><Link to="/dashboard" onClick={this.reloadme}>News</Link></li>
        <li><Link to="/SavedNews">Saved News</Link></li>
        <li><a href="/" onClick={this.SignOutHandler}>Log out</a></li>
        <br /> <br />
       {this.state.username},
          <br />
        {this.state.email}
      </div>);
    }
    return (
      <div>
        <HashRouter>
          <div className="wrapper row1">
            <header id="header" className="clear">
              <div id="hgroup">
                <h1><a href="#/">Fast E-News</a></h1>
                <h2>Your Source for all news </h2>
              </div>
              <nav>
                <ul>
                  {this.navbar}
                </ul>
              </nav>
            </header>
          </div>

        </HashRouter>

      </div>
    );
  }
}


export default Header;

