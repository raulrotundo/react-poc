import React from 'react';
import MessageComponent from './message/message-component';
import NotificationComponent from './notification/notification-component';
import LanguageComponent from './language/language-component';
import UserDropdownMenuContainer from './user-dropdown-menu/user-dropdown-menu-container';

const NavbarTogglerComponent = (props) => {
  const { activeNavbarToggler, setNavbarTogglerDropDown, auth } = props;
  return (
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ml-auto mt-2 mt-md-0">
        <MessageComponent activeNavbarToggler={activeNavbarToggler} setNavbarTogglerDropDown={setNavbarTogglerDropDown} />
        <NotificationComponent activeNavbarToggler={activeNavbarToggler} setNavbarTogglerDropDown={setNavbarTogglerDropDown} />
        <LanguageComponent activeNavbarToggler={activeNavbarToggler} setNavbarTogglerDropDown={setNavbarTogglerDropDown} />
        <UserDropdownMenuContainer activeNavbarToggler={activeNavbarToggler} setNavbarTogglerDropDown={setNavbarTogglerDropDown} auth={auth} />
      </ul>
    </div>
  );
}

export default NavbarTogglerComponent;

