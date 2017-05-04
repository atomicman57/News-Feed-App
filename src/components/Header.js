import React from "react";
import
{
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  browserHistory,
  HashRouter
}
from 'react-router-dom'
import Login from "./login";
import Dashboard from "./dashboard";
import Body from "./body";
import Testview from "./testview";
import Newsheadline from "./newsheadline";



class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {};
    this.SignOutHandler = this.SignOutHandler.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  SignOutHandler()
  {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function ()
    {
      console.log('User signed out.');
     sessionStorage.clear();

    });
  }

  checkLogin()
  {
    gapi.load('auth2', function ()
    {
      gapi.auth2.init(
      {
        client_id: '811047390409-jvv9pei1sjf8f0d5ojfmig2ovgnrsvgt.apps.googleusercontent.com'
      }).then(function (auth2)
      {
        var GoogleAuth = gapi.auth2.getAuthInstance()
        console.log(GoogleAuth.isSignedIn.get());
       
        if (GoogleAuth.isSignedIn.get())
        {
          
          window.location.href = "#/dashboard"
        
        }
      });

    });
  }
  render()
  {

    var Logged = sessionStorage.getItem('Logged');
   
    if (Logged == "true")
    {
     
      var navbar = <div>
          <li><Link to ="/dashboard">News</Link></li> 
          <li><Link to ="/favourites">Favourites</Link></li> 
          <li><a href="/" onClick={this.SignOutHandler}>Log out</a></li>
           </div>
    }
    else
    {
     
      var navbar = <div>
            <li><Link to ="/">Sign In</Link></li>
            
            </div>


    }
    return (
      <div>
        <HashRouter>
      <div>
      <div>
      <div id="header">
        <div className="row-1">
          
          
        </div>
        <div className="row-2">
          <div id = "mylogo"> Fast E - News Online </div>
        </div>
    
      <div className="row-3">

          <ul className="site-nav">
            
              {navbar}
            
          </ul>
          </div>
        </div>
          
        </div>
        <br />
        <h2>Welcome to Fast News Headline!</h2>
            
            
  <div>


    <Route exact = {true} path = "/" component = {Login} />
  <Route name = "dashboard" path = "/dashboard" component = {Dashboard} />
  <Route name = "headline" path = "/headline" component = {Newsheadline} />
  <Route name = "testview" path = "/testview" component = {Testview} />
  
  </div>
  </div>

  </HashRouter>
       
      </div>
    );
  }
}


export default Header;

