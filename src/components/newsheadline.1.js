import React from 'react';
import axios from 'axios';
import { getSources, getHeadline } from '../utils/newsapi.js';


class Newsheadline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],

    };
  }


  componentDidMount() {
    let source = this.props.location.search;
    source = source.slice(8);
    window.addEventListener('google-loaded', this.checkLogin);
    const _this = this;
    this.serverRequest =
      axios
        .get(`https://newsapi.org/v1/articles?source=${source}&apiKey=213327409d384371851777e7c7f78dfe`)
        .then(function (result) {
          console.log(result.data);
          _this.setState({
            headlines: result.data.articles,
          });
          console.log(this.state.articles);
        });
  }


  render() {
    console.log(this.props.query);

    const libraries1 = this.state.headlines;
    console.log(libraries1);


    return (
      <div>
        <h1> Headlines </h1>
        <br />
        <div id="headlines">
          <ul>

            { libraries1.map(info => (<div><li><h3>{info.title}</h3></li> <li>{info.description}</li>                     <li>Author: {info.author} </li> <li>View More: <a href={info.url} target="_blank">{info.url}</a></li> <br /> </div>)) }

          </ul>

        </div>

      </div>
    );
  }
}


export default Newsheadline;

