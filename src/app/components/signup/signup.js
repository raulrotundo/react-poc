import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import userAvatar from 'assets/images/logo.png';

class Signup extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="row">
          <div className="col-md-4 push-md-4">
            <img src={userAvatar} width="150px" className="user-avatar" alt="" />
            <form noValidate>
              <div className="form-content">
                <div className="form-group">
                  <input type="text" className="form-control input-underline input-lg" id="" placeholder="Full Name" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control input-underline input-lg" id="" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control input-underline input-lg" id="" placeholder="Password" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control input-underline input-lg" id="" placeholder="Repeat Password" />
                </div>
              </div>
              <Link to="/login">
                <button className="btn rounded-btn">Log in</button>
              </Link>
              &nbsp;
                <button className="btn rounded-btn">Register</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
