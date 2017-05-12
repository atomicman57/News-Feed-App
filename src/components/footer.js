import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="wrapper row3">
          <footer id="footer" className="clear">
            <p className="fl_left">Copyright &copy; 2017
              - All Rights Reserved - Fast E-News</p>
            <p className="fl_right">Andela 2017</p>
          </footer>
        </div>
      </div>
    );
  }
}


export default Footer;

