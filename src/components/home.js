import React from 'react';
import mylogo from "./mylogo.jpg"



class Home extends React.Component {


  render() {

    return (
      <div>

        <h1 id="fnews"> Home </h1>
        <br /> <br /> <br />
        <div id="hometxt">
          <p>Welcome to Fast E- News where you get the lastest news very fast. Get all types of news at any time.</p>
          <img src={mylogo} />
          <p>Fast E-News provides up-to-the-minute news, breaking news, sport news,international news,local news
          and feature stories</p>
        </div>

      </div>
    );
  }
}


export default Home;

