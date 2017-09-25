import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserDropdownMenuComponent from './user-dropdown-menu-component';
import { logout } from 'redux/actions/auth';

class UserDropdownMenuContainer extends Component {

  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(e) {
    e.preventDefault();
    this.props.onLogout();
    this.context.router.history.push('/');
  }

  render() {
    return <UserDropdownMenuComponent
      activeNavbarToggler={this.props.activeNavbarToggler}
      setNavbarTogglerDropDown={this.props.setNavbarTogglerDropDown}
      auth={this.props.auth}
      onLogout={this.onLogout}
    />;
  }
}

UserDropdownMenuContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    navbar: state.navbar,
    auth: state.auth
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch(logout())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdownMenuContainer);