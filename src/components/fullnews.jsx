import React from 'react';
import queryString from 'query-string';
import Iframe from 'react-iframe';
import newsstore from '../stores/newsstore';
import * as actions from '../actions/newsactions';
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
  WhatsappShareButton,
  PinterestShareButton,
} = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');

class Fullnews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullnews: [],

    };
    this.getFullnews = this.getFullnews.bind(this);
    this.updateFullnews = this.updateFullnews.bind(this);
    this.iframe = this.iframe.bind(this);
  }

  componentWillMount() {
    const urldata = queryString.parse(this.props.location.search);
    const source = urldata.source;
    this.updateFullnews(source);
    newsstore.on('fullnews', this.getFullnews);
  }

  componentWillUnmount() {
    newsstore.removeListener('fullnews', this.getFullnews);
  }

  getFullnews(source) {
    this.setState({
      fullnews: newsstore.getFullnews(source),
    });
    if (this.state.fullnews.length <= 0) {
      this.updateFullnews(source);
    }
  }

  updateFullnews(source) {
    actions.getFullnews(source);
  }

  iframe() {
    return {
      __html: this.props.iframe,
    };
  }

  render() {
    const fullnews = this.state.fullnews;
    const urldata = queryString.parse(this.props.location.search);
    console.log(urldata);
    const source = urldata.source;
    const sharesource = window.location.href;

    const html = this.state.fullnews;
    const parser = new DOMParser();
    let htmlDoc = parser.parseFromString(html, 'text/html');

    htmlDoc = new XMLSerializer().serializeToString(htmlDoc);

    console.log(window.location.href);


    return (
      <div>

        <h1 id="fnews">Full News </h1>
        <br />
        <h2> Share From Fast E-News On </h2>
        <span id="share">

          <TwitterShareButton title="Shared From Fast E-News" children="Share on Twitter" url={source}>
            <TwitterIcon size={52} round />
          </TwitterShareButton>
        </span>

        <span id="share">
          <FacebookShareButton title="Shared From Fast E-News" children="Share on Facebook" url={source} >
            <FacebookIcon size={52} round /> </FacebookShareButton>
        </span>
        <span id="share">
          <GooglePlusShareButton title="Shared From Fast E-News" children="Share on Google" url={source} >
            <GooglePlusIcon size={52} round /> </GooglePlusShareButton>
        </span>

        <span id="share">
          <WhatsappShareButton title="Shared From Fast E-News" children=" " url={source} >
            <WhatsappIcon size={52} round /> </WhatsappShareButton>
        </span>
        <span id="share">
          <TelegramShareButton title="Shared From Fast E-News" children=" " url={source} >
            <TelegramIcon size={52} round /> </TelegramShareButton>
        </span>
        <span id="share">
          <LinkedinShareButton title="Shared From Fast E-News" children=" " url={source} >
            <LinkedinIcon size={52} round /> </LinkedinShareButton>
        </span>
        <span id="share">
          <PinterestShareButton title="Shared From Fast E-News" children=" " url={source} >
            <PinterestIcon size={52} round /> </PinterestShareButton>
        </span>

        <br /> <br /> <br />
        <div id="scraped">
          {this.state.sharebtn}
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

