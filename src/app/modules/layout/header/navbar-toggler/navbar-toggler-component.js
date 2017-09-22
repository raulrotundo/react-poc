import React from 'react';
import MessageComponent from './message/message-component';
import NotificationComponent from './notification/notification-component';
import LanguageComponent from './language/language-component';
import UserDropdownMenuComponent from './user-dropdown-menu/user-dropdown-menu-component';

const NavbarTogglerComponent = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ml-auto mt-2 mt-md-0">
        <MessageComponent />
        <NotificationComponent />
        <LanguageComponent />
        <UserDropdownMenuComponent />
      </ul>
    </div>
  );
}

export default NavbarTogglerComponent;

