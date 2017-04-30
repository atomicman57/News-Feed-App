import React from "react";
import axios from "axios";




axios.get('https://newsapi.org/v1/sources')
  .then(function (response) {
    let TheJson = response.data
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
(() => {

  console.log(window.LoggedIn)
})

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



