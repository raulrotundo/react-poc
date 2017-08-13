import React, { Component } from 'react';
import NavbarToggler from './navbar-toggler/navbar-toggler';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="pos-f-t fixed-top header">
        <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-md">
          <button className="navbar-toggler navbar-toggler-right">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">{process.env.REACT_APP_WEBSITE_NAME}</a>
          <NavbarToggler />
        </nav>
      </div>
    );
  }
}

export default Header;
