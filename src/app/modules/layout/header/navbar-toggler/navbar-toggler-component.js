import React from 'react';
import MessageComponent from './message/message-component';
import NotificationComponent from './notification/notification-component';
import LanguageComponent from './language/language-component';
import UserDropdownMenuComponent from './user-dropdown-menu/user-dropdown-menu-component';

const NavbarTogglerComponent = (props) => {
  const { dropdownOpen, setNavbarTogglerDropDown } = props;
  return (
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ml-auto mt-2 mt-md-0">
        <MessageComponent dropdownOpen={dropdownOpen} setNavbarTogglerDropDown={setNavbarTogglerDropDown} />
        <NotificationComponent />
        <LanguageComponent />
        <UserDropdownMenuComponent />
      </ul>
    </div>
  );
}

export default NavbarTogglerComponent;

