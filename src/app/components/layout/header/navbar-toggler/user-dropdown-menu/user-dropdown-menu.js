import React, { Component } from 'react';
import { NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../../../actions/authActions';

class UserDropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };

    this.onLogout = this.onLogout.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onLogout(e) {
    e.preventDefault();
    this.props.logout();
    this.context.router.history.push('/');
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav caret><i className="fa fa-user"></i> {isAuthenticated ? user.name : 'Undefined Name'}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem><i className="fa fa-fw fa-user"></i> Profile</DropdownItem>
          <DropdownItem><i className="fa fa-fw fa-envelope"></i> Inbox</DropdownItem>
          <DropdownItem><i className="fa fa-fw fa-gear"></i> Settings</DropdownItem>
          <DropdownItem onClick={this.onLogout}><i className="fa fa-fw fa-power-off"></i> Log Out</DropdownItem>
        </DropdownMenu>
      </NavDropdown>
    );
  }
}

UserDropdownMenu.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

UserDropdownMenu.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(UserDropdownMenu);