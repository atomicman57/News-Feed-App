import React from "react";
import axios from "axios";
global.LoggedIn = true;
import { getSources, getHeadline } from '../utils/newsapi.js';





class Dashboard extends React.Component {

checkLogin(){    
gapi.load('auth2', function() {
       
        console.log("Loaded")
        gapi.auth2.init({
  client_id: '811047390409-jvv9pei1sjf8f0d5ojfmig2ovgnrsvgt.apps.googleusercontent.com'
}).then(function(auth2) {
        var GoogleAuth = gapi.auth2.getAuthInstance()
        console.log(GoogleAuth.isSignedIn.get());
if(!GoogleAuth.isSignedIn.get()){

  
  window.location.href = "/"
} 

});

});
}
 
componentDidMount() {
       window.addEventListener('google-loaded', this.checkLogin);

       getSources()

  }
  

  render() {

    return (
    	<div>
    	<h1> Logged In </h1>
     
        
      </div>
    );
  }
}


export default Dashboard;



