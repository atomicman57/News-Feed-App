import React from 'react';
import queryString from 'query-string';
import Iframe from 'react-iframe';
import newsstore from '../stores/newsstore';
import * as actions from '../actions/newsactions';

class Fullnews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullnews: [],

        };
        this.getFullnews = this.getFullnews.bind(this);
        this.updateFullnews = this.updateFullnews.bind(this);
        this.iframe = this.iframe.bind(this)
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
            __html: this.props.iframe
        }
    }

    render() {
        const fullnews = this.state.fullnews;
        const urldata = queryString.parse(this.props.location.search);
        console.log(urldata)
        const source = urldata.source;
        console.log(source)

        let html = this.state.fullnews;
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(html, "text/html");

        htmlDoc = new XMLSerializer().serializeToString(htmlDoc);

        return (
            <div>

                <h1>FullNews </h1>
                <br />
                <div id="scraped">

                    <Iframe url={source}
                        width="99%"
                        height="2000px"
                        display="initial"
                        position="relative"
                        styles={{ zIndex: 3 }}
                        allowFullScreen />
                </div>

            </div>
        );
    }
}


export default Fullnews;

