import React from "react";
import axios from "axios";
import { getSources, getHeadline } from '../utils/newsapi.js';





class Newssources extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sources: [],
      searchString: ''
    }
this.handleChange = this.handleChange.bind(this);


  }
  


handleChange(e){

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.

        this.setState({searchString:e.target.value});
    }

componentDidMount() {
       window.addEventListener('google-loaded', this.checkLogin);
       var _this = this;
    this.serverRequest = 
      axios
        .get("https://newsapi.org/v1/sources")
        .then(function(result) { 
       
          _this.setState({
            sources: result.data.sources
          });
        })

     

  }
  



 

  

  render() {
      
      var libraries = this.state.sources,
            searchString = this.state.searchString.trim().toLowerCase();
            if(searchString.length > 0){
              
            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }


    return (
    	<div>
        <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search Sources Here" />
        <div id = "sources">
                  <ul> 

                        { libraries.map(function(info){
                            return (<div> <li>{info.name} <a href={"#/headline?source="+ info.id }>View Headlines</a> </li> </div>)
                        }) }

                    </ul>

     </div>
        
      </div>
    );
  }
}


export default Newssources;



