import React from 'react';
import { NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const UserDropdownMenuComponent = (props) => {
  const { auth, activeNavbarToggler, setNavbarTogglerDropDown, onLogout } = props;
  let activeNavbarTogglerIsOpen = activeNavbarToggler === 'user-drop-down' ? true : false;
  return (
    <NavDropdown isOpen={activeNavbarTogglerIsOpen} toggle={() => setNavbarTogglerDropDown('user-drop-down')}>
      <DropdownToggle nav caret><i className="fa fa-user"></i> {auth.isAuthenticated ? auth.user.name : 'Undefined Name'}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem><i className="fa fa-fw fa-user"></i> Profile</DropdownItem>
        <DropdownItem><i className="fa fa-fw fa-envelope"></i> Inbox</DropdownItem>
        <DropdownItem><i className="fa fa-fw fa-gear"></i> Settings</DropdownItem>
        <DropdownItem onClick={onLogout}><i className="fa fa-fw fa-power-off"></i> Log Out</DropdownItem>
      </DropdownMenu>
    </NavDropdown>
  );
}

export default UserDropdownMenuComponent;