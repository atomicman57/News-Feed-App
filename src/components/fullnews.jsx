import React from 'react';
import queryString from 'query-string';
import Iframe from 'react-iframe';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  PinterestShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');

class Fullnews extends React.Component {

  render() {
    const urldata = queryString.parse(this.props.location.search);
    const source = urldata.source;
    return (
      <div>

        <h1 id="fnews">Full News </h1>
        <br />
        <h2> Share From Fast E-News On </h2>
        <br />
        <span id="share">

          <TwitterShareButton
            title="Shared From Fast E-News"
            children="Share on Twitter"
            url={source}>
            <TwitterIcon size={52} round />
          </TwitterShareButton>
        </span>

        <span id="share">
          <FacebookShareButton
            title="Shared From Fast E-News"
            children="Share on Facebook"
            url={source} >
            <FacebookIcon size={52} round /> </FacebookShareButton>
        </span>
        <span id="share">
          <GooglePlusShareButton
            title="Shared From Fast E-News"
            children="Share on Google"
            url={source} >
            <GooglePlusIcon size={52} round /> </GooglePlusShareButton>
        </span>

        <span id="share">
          <TelegramShareButton
            title="Shared From Fast E-News"
            children=" " url={source} >
            <TelegramIcon size={52} round /> </TelegramShareButton>
        </span>
        <span id="share">
          <LinkedinShareButton
            title="Shared From Fast E-News"
            children=" "
            url={source} >
            <LinkedinIcon size={52} round /> </LinkedinShareButton>
        </span>
        <span id="share">
          <PinterestShareButton
            title="Shared From Fast E-News"
            children=" " url={source} >
            <PinterestIcon size={52} round /> </PinterestShareButton>
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
    );
  }
}


export default Fullnews;

