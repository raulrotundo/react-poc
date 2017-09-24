import React from 'react';
import { NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const LanguageComponent = (props) => {
  const { activeNavbarToggler, setNavbarTogglerDropDown } = props;
  let activeNavbarTogglerIsOpen = activeNavbarToggler === 'language' ? true : false;
  return (
    <NavDropdown isOpen={activeNavbarTogglerIsOpen} toggle={() => setNavbarTogglerDropDown('language')}>
      <DropdownToggle nav caret><i className="fa fa-language"></i> Language</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>English</DropdownItem>
        <DropdownItem>French</DropdownItem>
        <DropdownItem>Urdu</DropdownItem>
      </DropdownMenu>
    </NavDropdown>
  );
}

export default LanguageComponent;
