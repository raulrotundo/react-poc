import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css';
import userAvatar from '../../assets/images/logo.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLoginRequest } from '../actions/authActions';
import Alert from '../layout/alert/alert';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      loginForm: {
        username: '',
        password: ''
      },
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const loginForm = this.state.loginForm;
    loginForm[field] = event.target.value;

    this.setState({ loginForm });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.userLoginRequest(this.state.loginForm).then(
      (res) => this.context.router.history.push('/app'),
      (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
    );
  }

  render() {
    const { errors, isLoading } = this.state;
    return (
      <div className="login-page">
        <div className="row">
          <div className="col-md-4 push-md-4">
            <Image src={userAvatar} width="150px" className="user-avatar" />
            {errors.msg && <Alert type="danger" message={errors.msg} />}
            <form onSubmit={this.onSubmit} noValidate>
              <div className="form-content">
                <div className="form-group">
                  <input type="text" name="username" onChange={this.onChange} value={this.state.loginForm.username} className="form-control input-underline input-lg" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="password" name="password" onChange={this.onChange} value={this.state.loginForm.password} className="form-control input-underline input-lg" placeholder="Password" />
                </div>
              </div>
              <button className="btn rounded-btn" type="submit" disabled={isLoading}>Log in</button>
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

Login.propTypes = {
  userLoginRequest: PropTypes.func.isRequired
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect((state) => { return {} }, { userLoginRequest })(Login);