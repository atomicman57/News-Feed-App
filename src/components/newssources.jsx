import React from 'react';
import newsstore from '../stores/newsstore';
import * as actions from '../actions/newsactions';


class Newssources extends React.Component {
  constructor() {
    super();
    /**
     * Setting the initial state of sources and
     * search String is empty.
     */
    this.state = {
      sources: [],
      searchString: '',
    };

    this.getSources = this.getSources.bind(this);
    this.updateSources = this.updateSources.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.updateSources();
    newsstore.on('sources', this.getSources);
  }

  componentWillUnmount() {
    newsstore.removeListener('sources', this.getSources);
  }

  getSources() {
    this.setState({
      sources: newsstore.getSources(),
    });
    if (this.state.sources.length <= 0) {
      this.updateSources();
    }
  }

  updateSources() {
    actions.getSources();
  }


  handleChange(e) {
    this.setState({ searchString: e.target.value });
  }

  render() {
    let sources = this.state.sources;
    const searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      sources = sources.filter(info =>
        info.name.toLowerCase().match(searchString));
    }
    return (
      <div>

        <input
          type="text"
          value={this.state.searchString}
          onChange={this.handleChange}
          placeholder="Search"
        />

        {sources.map((info, index) => {
          const sortBy = info.sortBysAvailable;
          return (
            <div key={index}>
              <div className="card" key={index}>
                <br /><br /><br />
                <div className="container" >
                  <h1> {info.name}</h1>
                  <p className="title" key={index}>{info.description}</p>
                  {sortBy.map((options, index) => (
                    <p key={index}>
                      <a
                        href={`#/headline?source=${info.id}&name=${info.name}
                      &sortBy=${options}`}>
                        {options} news
                        </a>
                    </p>
                  ))
                  }
                </div>
              </div>
            </div>
          );
        })
        }
        <br />
        <div className="loader" />
      </div>
    );
  }
}


export default Newssources;

