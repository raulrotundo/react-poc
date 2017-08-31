import React, { Component } from 'react';

class UserDropdownMenu extends Component {
  render() {
    return (
      <li className="nav-item dropdown">
        <a href="/" className="nav-link">
          <i className="fa fa-user"></i> John Smith <b className="caret"></b>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="/"><i className="fa fa-fw fa-user"></i> Profile</a>
          <a className="dropdown-item" href="/"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
          <a className="dropdown-item" href="/"><i className="fa fa-fw fa-gear"></i> Settings</a>
          <a className="dropdown-item"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
        </div>
      </li>
    );
  }
}

export default UserDropdownMenu;
