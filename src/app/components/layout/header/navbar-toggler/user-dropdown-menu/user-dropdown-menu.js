import React, { Component } from 'react';
import { NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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

  onLogout() {
    console.log('logout fired!');
  }

  render() {
    return (
      <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav caret><i className="fa fa-user"></i> John Smith</DropdownToggle>
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

export default UserDropdownMenu;
