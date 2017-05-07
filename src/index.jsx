import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import Newsheadline from './components/newsheadline.jsx';
import Header from './components/Header.jsx';
import Footer from './components/footer.jsx';
import Login from './components/login.jsx';
import Dashboard from './components/dashboard.jsx';
import Home from './components/home.jsx';
import Fullnews from './components/fullnews.jsx';
// import Saved from './components/saved';

const app = document.getElementById('app');


ReactDOM.render(
  <div>
    <Header />
    <div className="wrapper row2">
      <div id="container" className="clear">


        <div id="homepage" />


        <HashRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route name="dashboard" path="/dashboard" component={Dashboard} />
            <Route name="headline" path="/headline" component={Newsheadline} />
            {/*<Route name="saved" path="/saved" component={Saved} />*/}
            <Route name="login" path="/login" component={Login} />
            <Route name="fullnews" path="/fullnews" component={Fullnews} />

          </div>


        </HashRouter>

      </div>
    </div>


    <Footer />

  </div>, app);
