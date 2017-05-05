import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.SignOutHandler = this.SignOutHandler.bind(this);
  }

  SignOutHandler() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
    });
  }

  render() {
    return (
      <div>
        <div id="footer">
          <div className="indent">
            <div className="fleft">Designed by: Philips Blessing &nbsp;<a href="#" /> </div>
            <div className="fright">Copyright - Fast E - News Online</div>
          </div>
        </div>

      </div>
    );
  }
}


export default Footer;

