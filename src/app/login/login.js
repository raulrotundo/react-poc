import React, { Component } from 'react';
import { FormControl, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css';
import userAvatar from '../../assets/images/logo.png';

class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="row">
          <div className="col-md-4 push-md-4">
            <Image src={userAvatar} width="150px" className="user-avatar" />
            <form noValidate>
              <div className="form-content">
                <div className="form-group">
                  <FormControl type="text" name="username" className="form-control input-underline input-lg" placeholder="Email" />
                </div>
                <div className="form-group">
                  <FormControl type="password" name="password" className="form-control input-underline input-lg" placeholder="Password" />
                </div>
              </div>
              <Button className="btn rounded-btn" type="submit">Log in</Button>
              &nbsp;
              <Link to="/signup">
                <Button className="btn rounded-btn">Register</Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
