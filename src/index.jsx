import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';

import NewsHeadline from './components/NewsHeadline.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.js';
import Login from './components/login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Home from './components/Home.js';
import FullNews from './components/FullNews.jsx';
import SavedNews from './components/SavedNews.jsx';

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
            <Route name="headline" path="/headline" component={NewsHeadline} />
            <Route name="favourites" path="/SavedNews" component={SavedNews} />
            <Route name="login" path="/login" component={Login} />
            <Route name="fullnews" path="/fullnews" component={FullNews} />
          </div>
        </HashRouter>
      </div>
    </div>
    <Footer />
  </div>,
  app,
  );
