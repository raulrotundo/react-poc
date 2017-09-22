import React, { Component } from 'react';
import { NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Notification extends Component {
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
}

export default Notification;
