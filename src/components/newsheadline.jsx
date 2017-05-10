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

  componentWillMount() {
    const urldata = queryString.parse(this.props.location.search);
    const source = urldata.source;
    const sort = urldata.sortBy;
    this.updateHeadlines(source, sort);
    newsstore.on('articles', this.getHeadlines);
  }

  componentWillUnmount() {
    newsstore.removeListener('articles', this.getHeadlines);
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

  render() {
    const headlines = this.state.headlines;
    const urldata = queryString.parse(this.props.location.search);
    const sourcename = urldata.name;
    const sorted = urldata.sortBy;

    return (
      <div>
        <h1 id="fnews">{sourcename} {sorted} Headlines </h1>
        <br />

        {headlines.map(info =>
              (<div>
                <div className="card">
                  <img src={info.urlToImage} alt="News Image" style={{ width: `${100}%` }} />
                  <div className="container">
                    <br />
                    <h1>{info.title}</h1>
                    <p>{info.description}</p>
                    <p>Author: {info.author} </p>
                    <a href={`#/fullnews?source=${info.url}`} >View More...</a>
                    <br /><br />
                    <a href={info.url} target="_blank" rel="noopener noreferrer" >
                      View From Source</a>

                    <br />
                  </div>
                </div>
              </div>))
                }
        <div className="loader" />
      </div>
    );
  }
}
Newsheadline.propTypes = {
  location: React.PropTypes.string.isRequired,
};

export default Newsheadline;

