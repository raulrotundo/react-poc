import React from 'react';
import { FormControl, Button, Image } from 'react-bootstrap';
import userAvatar from '../../assets/images/logo.png';

const render = function() {
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
              <Button className="btn rounded-btn" type="submit">Log in</Button>
              &nbsp;
              <Button className="btn rounded-btn">Register</Button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default render;