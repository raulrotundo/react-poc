import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2>Welcome to React POC</h2>
            <p>This POC (Proof of concept) is intended to be use as base or demo for projects with React.</p>
            <p>
              <Link to="/login" className="btn rounded-btn">Go to Login Form</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
