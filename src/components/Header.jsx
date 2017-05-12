import React from 'react';
import {
  Link,
  HashRouter,
} from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.SignOutHandler = this.SignOutHandler.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  SignOutHandler() {
    const auth2 = gapi.auth2.getAuthInstance();
    this.navbar = (<div>
      <li><Link to="/login">Sign In</Link></li>
    </div>);

    location.reload();
    auth2.signOut().then(() => {
      reactLocalStorage.clear();
    });
  }

  checkLogin() {
    gapi.load('auth2', () => {
      gapi.auth2.init(
        {
          client_id: '811047390409-jvv9pei1sjf8f0d5ojfmig2ovgnrsvgt.apps.googleusercontent.com',
        }).then((auth2) => {
          const GoogleAuth = gapi.auth2.getAuthInstance();
          if (GoogleAuth.isSignedIn.get()) {
            reactLocalStorage.set('Logged', 'true');
            this.navbar = (<div>
              this.navbar = (<div>
                <li><Link onClick={this.reloadme} to="/dashboard">News</Link></li>
                <li><Link to="/favourites">Favourites</Link></li>
                <li><a href="/" onClick={this.SignOutHandler}>Log out</a></li>
              </div>);

            </div>);
          } else {
            <li><a href="#/login" onClick={this.reloadme} >Sign In</a></li>;
          }
        });
    });
  }
  reloadme() {
    location.reload();
  }
  render() {
    const Logged = reactLocalStorage.get('Logged');
    if (Logged === 'true') {
      this.navbar = (<div>
        <li><Link to="/dashboard" onClick={this.reloadme}>News</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
        <li><a href="/" onClick={this.SignOutHandler}>Log out</a></li>

      </div>);
    } else {
      this.navbar = (<div>
        <li><a href="#/login" onClick={this.reloadme} >Sign In</a></li>

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

