import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import Testview from './components/testview';
import Newsheadline from './components/newsheadline';
import Header from './components/Header';
import Footer from './components/footer';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Home from './components/home';


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
            <Route name="testview" path="/testview" component={Testview} />
            <Route name="login" path="/login" component={Login} />

          </div>


        </HashRouter>

      </div>
    </div>


    <Footer />

  </div>, app);
