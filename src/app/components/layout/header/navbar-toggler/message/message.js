import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link" href="/">
          <i className="fa fa-envelope"></i> <b className="caret"></b><span className="sr-only">(current)</span>
        </a>
        <ul className="dropdown-menu dropdown-menu-right messages">
          <li className="media">
            <img className="d-flex align-self-center mr-3" src="http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg" alt="Generic placeholder" />
            <div className="media-body">
              <h5 className="mt-0 mb-1">John Smith</h5>
              <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
              <p className="last"> Lorem ipsum dolor sit amet, consectetur...</p>
            </div>
          </li>
          <li className="media">
            <img className="d-flex align-self-center mr-3" src="http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg" alt="Generic placeholder" />
            <div className="media-body">
              <h5 className="mt-0 mb-1">John Smith</h5>
              <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
              <p className="last"> Lorem ipsum dolor sit amet, consectetur...</p>
            </div>
          </li>
          <li className="media">
            <img className="d-flex align-self-center mr-3" src="http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg" alt="Generic placeholder" />
            <div className="media-body">
              <h5 className="mt-0 mb-1">John Smith</h5>
              <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
              <p className="last"> Lorem ipsum dolor sit amet, consectetur...</p>
            </div>
          </li>
        </ul>
      </li>
    );
  }
}

export default Message;
