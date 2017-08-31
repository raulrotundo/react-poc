import React, { Component } from 'react';
import './not-found.css';

class NotFound extends Component {
  render() {
    return (
      <div className="welcome-page">
        <div className="row">
          <div className="col-md-10 push-md-1">
            <h1>404 - Page Not Found</h1>
            <p className="lead">This page does not exist</p>
            <p className="lead">
              <a href="/" className="btn rounded-btn">Restart</a>
            </p>
          </div>
        </div>
      </div >
    );
  }
}

export default NotFound;
