import React, { Component } from 'react';
import { FormControl, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './signup.css';
import userAvatar from '../../assets/images/logo.png';

class Signup extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="row">
          <div className="col-md-4 push-md-4">
            <Image src={userAvatar} width="150px" className="user-avatar" />
            <form noValidate>
              <div className="form-content">
                <div className="form-group">
                  <FormControl type="text" className="form-control input-underline input-lg" id="" placeholder="Full Name" />
                </div>
                <div className="form-group">
                  <FormControl type="text" className="form-control input-underline input-lg" id="" placeholder="Email" />
                </div>
                <div className="form-group">
                  <FormControl type="password" className="form-control input-underline input-lg" id="" placeholder="Password" />
                </div>
                <div className="form-group">
                  <FormControl type="password" className="form-control input-underline input-lg" id="" placeholder="Repeat Password" />
                </div>
              </div>
              <Link to="/login">
                <Button className="btn rounded-btn">Log in</Button>
              </Link>
              &nbsp;
                <Button className="btn rounded-btn">Register</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
