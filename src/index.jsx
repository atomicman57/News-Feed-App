import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,Link,Redirect,withRouter,browserHistory,HashRouter} from 'react-router-dom'




import Body from "./components/body"
import Footer from "./components/footer"
import Login from "./components/login";
import Dashboard from "./components/dashboard";




const app = document.getElementById("app");


ReactDOM.render(
	<div>

	<Body />
	<Footer />

	</div>, app );