import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css';
import userAvatar from '../../assets/images/logo.png';
import Authentication from '../shared/services/authentication';

export default class Login extends Authentication {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      loginForm: {
        username: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const field = event.target.name;
    const loginForm = this.state.loginForm;
    loginForm[field] = event.target.value;

    this.setState({ loginForm });
  }

  processForm(event) {
    // Prevent default action. In this case, action is the form submission event
    event.preventDefault();
    super.login(this.state.loginForm);
  }

  render() {
    return (
      <div className="login-page">
        <div className="row">
          <div className="col-md-4 push-md-4">
            <Image src={userAvatar} width="150px" className="user-avatar" />
            <form onSubmit={this.processForm} noValidate>
              <div className="form-content">
                <div className="form-group">
                  <input type="text" name="username" onChange={this.handleInputChange} value={this.state.loginForm.username} className="form-control input-underline input-lg" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="password" name="password" onChange={this.handleInputChange} value={this.state.loginForm.password} className="form-control input-underline input-lg" placeholder="Password" />
                </div>
              </div>
              <button className="btn rounded-btn" type="submit">Log in</button>
              &nbsp;
              <Link to="/signup">
                <button className="btn rounded-btn">Register</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
