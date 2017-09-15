import React, { Component } from 'react';
import { NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Language extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav caret><i className="fa fa-language"></i> Language</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>English</DropdownItem>
          <DropdownItem>French</DropdownItem>
          <DropdownItem>Urdu</DropdownItem>
        </DropdownMenu>
      </NavDropdown>
    );
  }
}

export default Language;
