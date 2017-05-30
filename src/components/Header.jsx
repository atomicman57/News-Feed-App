import React from 'react';
import { Link, HashRouter } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';

/**
 * Class representing Header.
 * @extends React Component
 */

class Header extends React.Component {
  constructor(props) {
    super(props);

    /**
     * Setting the initial state of username,
     * email and logged status of the user to empty
     */

    this.state = {
      username: '',
      email: '',
      logged: ''
    };

    /**
     * Binding the functions
     */

    this.SignOut = this.SignOut.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  /* If google api is loaded,
    * and call check login function
    */

  componentDidMount() {
    window.addEventListener('google-loaded', this.checkLogin);
  }

  /**
   * Sign Out Handler Function
   * This function handles the signout when the user
   * click signout button
   * It signs the user out of the app,
   * and clears all the user data on local storage
   */

  SignOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    location.reload();
    auth2.signOut().then(() => {
      reactLocalStorage.clear();
    });
  }

  /**
   * Checks if User is Logged in
   * If user is logged in,
   * It set the state of username with welcome message
   * and set localstorage Logged to true
   * It also set the email and logged status state
   */

  checkLogin() {
    gapi.load('auth2', () => {
      gapi.auth2
        .init({
          client_id: process.env.CLIENT_ID
        })
        .then((auth2) => {
          const GoogleAuth = gapi.auth2.getAuthInstance();
          if (GoogleAuth.isSignedIn.get()) {
            reactLocalStorage.set('Logged', 'true');
            const profile = auth2.currentUser.get().getBasicProfile();
            this.setState({
              username: `Welcome ${profile.getName()}`,
              email: profile.getEmail(),
              logged: 'true'
            });
          }
        });
    });
  }

  render() {
    /**
     * If the user is logged in the Nav Bar should,
     * contain welcome message,with Navigations
     */

    const Logged = this.state.logged;
    if (Logged === 'true') {
      this.navbar = (
        <div>
          <li>
            <Link to="/dashboard">News</Link>
          </li>
          <li><Link to="/SavedNews">Saved News</Link></li>
          <li><a href="/" onClick={this.SignOut}>Log out</a></li>
          <br /> <br />
          {this.state.username},
          <br />
          {this.state.email}
        </div>
      );
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
