import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
              <Link to="/" className="btn rounded-btn">Restart</Link>
            </p>
          </div>
        </div>
      </div >
    );
  }
}

export default NotFound;
