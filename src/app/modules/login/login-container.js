import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLoginRequest, handleInputChange } from 'redux/actions/auth';
import LoginComponent from './login-component';

class LoginContanier extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.context.router.history.push('/app')
    }
  }

  onChange(event) {
    const field = event.target.name;
    const loginForm = this.props.form;
    loginForm[field] = event.target.value;
    this.props.handleInputChange(loginForm);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userLoginRequest(this.props.form).then(
      (res) => this.context.router.history.push('/app')
    );
  }

  render() {
    return <LoginComponent
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      form={this.props.form}
      errors={this.props.errors}
    />
  }
}

LoginContanier.propTypes = {
  userLoginRequest: PropTypes.func.isRequired
}

LoginContanier.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return state.auth;
}

const mapDispatchToProps = dispatch => {
  return {
    //Returning promise from action
    userLoginRequest(loginForm) {
      return dispatch(userLoginRequest(loginForm));
    },
    handleInputChange: (loginForm) => { dispatch(handleInputChange(loginForm)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContanier);