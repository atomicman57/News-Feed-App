import React from 'react';
import queryString from 'query-string';
import Iframe from 'react-iframe';
import { ShareButtons, generateShareIcon } from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');

/**
 * Class representing FullNews.
 * @extends React Component
 */

class FullNews extends React.Component {
  constructor() {
    super();
    this.back = this.back.bind(this);
  }

  /**
 * Back button function
 * Use to go back in history
 */

  back() {
    window.history.back();
  }

  render() {
    /**
     * Getting the source url and,
     * parsing it
     */

    const urlData = queryString.parse(this.props.location.search);
    const source = urlData.source;
    return (

      /**
       * Social Media Buttons and Iframe,
       * to display full news in app
       */

      (
        <div>
          <h1 id="fnews">Full News </h1>
          <br />
          <button onClick={this.back} className="button">
            <span> « Go Back </span>
          </button>
          <h2> Share From Fast E-News On </h2>
          <br />
          <span id="share">
            <TwitterShareButton title="Shared From Fast E-News" url={source}>
              <TwitterIcon size={52} round />
            </TwitterShareButton>
          </span>

          <span id="share">
            <FacebookShareButton title="Shared From Fast E-News" url={source}>
              <FacebookIcon size={52} round />{' '}
            </FacebookShareButton>
          </span>
          <span id="share">
            <GooglePlusShareButton title="Shared From Fast E-News" url={source}>
              <GooglePlusIcon size={52} round />{' '}
            </GooglePlusShareButton>
          </span>

          <span id="share">
            <TelegramShareButton title="Shared From Fast E-News" url={source}>
              <TelegramIcon size={52} round />{' '}
            </TelegramShareButton>
          </span>
          <span id="share">
            <LinkedinShareButton title="Shared From Fast E-News" url={source}>
              <LinkedinIcon size={52} round />{' '}
            </LinkedinShareButton>
          </span>
          <br /> <br /> <br />
          <div id="scraped">
            <Iframe
              url={source}
              width="99%"
              height="1000px"
              display="initial"
              position="relative"
              styles={{ zIndex: 3 }}
              allowFullScreen
            />
          </div>
          <div className="loader2" />
        </div>
      )
    );
  }
}

export default FullNews;
