import React from "react";
import newsstore from "../stores/newsstore"
import * as actions from "../actions/newsactions"


class Testview extends React.Component {
    constructor() {
        super();
        this.state = {
          sources: newsstore.getSources(),  
           searchString: '',
        }
        this.getSources = this.getSources.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

   getSources() {

        this.setState({
            sources: newsstore.getSources()
        })
        if (this.state.sources.length <= 0) {
            this.updateSources();
        }
        
    }

    updateSources() {
        actions.getSources()
    }
    componentWillMount() {
        this.updateSources()
        newsstore.on("sources", this.getSources);
      
    
    }

    componentWillUnmount() {
        newsstore.removeListener("sources", this.getSources)

    } 

    handleChange(e){

        this.setState({searchString:e.target.value});
    }







    render() {
        
        console.log(this.state.sources)
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
                            return (<div> <li> {info.name} <a href={`#/headline?source=${info.id}`}>View Headlines</a> </li> </div>)
                        }) }

                    </ul>

     </div>
        
      </div>
        );
    }
}


export default Testview;



