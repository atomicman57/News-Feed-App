import React from 'react';
import NewsStore from '../stores/newsstore';
import NewsActions from '../actions/newsactions';


class NewsSources extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: [],
      searchString: '',
    };
    this.getSources = this.getSources.bind(this);
    this.updateSources = this.updateSources.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.updateSources();
    NewsStore.on('getsources', this.getSources);
  }
 

  componentWillUnmount() {
    NewsStore.removeListener('getsources', this.getSources);
  }

  getSources() {
    this.setState({
      sources: NewsStore.getSources(),
    });
  }

  updateSources() {
    NewsActions.getSources();
  }


  handleChange(event) {
    this.setState({ searchString: event.target.value });
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


export default NewsSources;

