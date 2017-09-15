import React, { Component } from 'react';
import Message from './message/message';
import Notification from './notification/notification';
import Language from './language/language';
import UserDropdownMenu from './user-dropdown-menu/user-dropdown-menu';

class NavbarToggler extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-md-0">
          <Message />
          <Notification />
          <Language />
          <UserDropdownMenu />
        </ul>
      </div>
    );
  }
}

export default NavbarToggler;

