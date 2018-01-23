import React from 'react';
import { NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const NotificationComponent = (props) => {
  const { activeNavbarToggler, setNavbarTogglerDropDown } = props;
  let activeNavbarTogglerIsOpen = activeNavbarToggler === 'notification' ? true : false;
  return (
    <NavDropdown isOpen={activeNavbarTogglerIsOpen} toggle={() => setNavbarTogglerDropDown('notification')}>
      <DropdownToggle nav caret><i className="fa fa-bell"></i></DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Pending Task <span className="badge badge-info">6</span></DropdownItem>
        <DropdownItem>In queue <span className="badge badge-info"> 13</span></DropdownItem>
        <DropdownItem>Mail <span className="badge badge-info"> 45</span></DropdownItem>
        <DropdownItem divider />
        <DropdownItem>View All</DropdownItem>
      </DropdownMenu>
    </NavDropdown>
  );
}

export default NotificationComponent;
