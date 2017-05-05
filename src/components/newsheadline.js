import React from 'react';
import queryString from 'query-string';
import newsstore from '../stores/newsstore';
import * as actions from '../actions/newsactions';


class Newsheadline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],

    };
    this.getHeadlines = this.getHeadlines.bind(this);
  }

  getHeadlines(source, sort) {
    this.setState({
      headlines: newsstore.getArticles(),
    });
    if (this.state.headlines.length <= 0) {
      this.updateHeadlines(source, sort);
    }
  }

  updateHeadlines(source, sort) {
    actions.getHeadlines(source, sort);
  }

  componentWillMount() {
    console.log(source);
    const urldata = queryString.parse(this.props.location.search);
    let source = urldata.source;
    let sort = urldata.sortBy;
    this.updateHeadlines(source, sort);
    newsstore.on('articles', this.getHeadlines);
  }


  componentWillUnmount() {
    newsstore.removeListener('articles', this.getHeadlines);
  }


  render() {
    const libraries1 = this.state.headlines;
    console.log(libraries1);


    return (
      <div>
        <h1> Headlines </h1>
        <br />
        <div id="headlines">
          <ul>

            {libraries1.map((info, index) => (<div><li key={index}><h3>{info.title}</h3></li> <li>{info.description}</li>                     <li>Author: {info.author} </li> <li><a href={info.url} target="_blank">View More...</a></li> <br /> </div>))}

          </ul>

        </div>

      </div>
    );
  }
}


export default Newsheadline;

