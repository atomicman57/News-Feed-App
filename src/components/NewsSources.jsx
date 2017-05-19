import React from 'react';
import NewsStore from '../stores/newsstore';
import NewsActions from '../actions/newsactions';

/**
 * Class representing News Store.
 * @extends React Component
 */
class NewsSources extends React.Component {
  constructor() {
    super();
    /**
     * Setting the initial state of Sources,
     * and Search String to empty
     */
    this.state = {
      sources: [],
      searchString: '',
    };
    /**
     * Binding the functions
     */
    this.getSources = this.getSources.bind(this);
    this.updateSources = this.updateSources.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

/**
 * On mounting of the component,
 * The Update function should be called
 * And the store should listen for "getsources" event
 * And the calls then get Sources function
 */
  componentDidMount() {
    this.updateSources();
    NewsStore.on('getsources', this.getSources);
  }

 /**
 * On Unmounting of the component,
 * The event should be removed to avoid, memory leak
 */
  componentWillUnmount() {
    NewsStore.removeListener('getsources', this.getSources);
  }

/**
 * Get Sources Function
 * This function update the sources state,
 * with sources data from the store,
 */

  getSources() {
    this.setState({
      sources: NewsStore.getSources(),
    });
  }

/**
 * Update Sources Function
 * This function initiate the actions,
 * it calls the News Actions get Sources,
 */
  updateSources() {
    NewsActions.getSources();
  }

/**
 * Handle Change Function
 * @param {object} event - The event object.
 * This function handle the input text box changes,
 * it get the inputted value from the text-box,
 */

  handleChange(event) {
    this.setState({ searchString: event.target.value });
  }

  render() {
    /**
     * Getting the News Sources object/array
     */
    let sources = this.state.sources;
    /**
     * Getting the value of the search string
     */
    const searchString = this.state.searchString.trim().toLowerCase();
    /**
     * If a letter is inputed filter the words that match,
     * and return in a new array/object
     */
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

