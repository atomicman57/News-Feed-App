import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import Login from './login.jsx';
import mylogo from '../public/images/mylogo.jpg';

const Home = () => {
  reactLocalStorage.clear();
  return (
    <div>
      <br /> <br />
      <div id="hometxt">
        <p>Welcome to Fast E- News where
            you get the lastest news very fast.
            Get all types of news at any time.</p>
            <p> Login to Continue </p>
            <div className="container">
               <div className="tag">
              <Login />
              </div>
            <div className = "homeblock">
        <img src={mylogo} height ="400px" width = "700px"/>
        </div>
        </div>
        <p>Fast E-News provides up-to-the-minute news,
            breaking news, sport news,international news,local news
          and feature stories</p>
      </div>

    </div>
  );
}


export default Home;

