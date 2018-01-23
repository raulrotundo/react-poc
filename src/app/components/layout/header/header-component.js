import React from 'react';
import NavbarTogglerContainer from './navbar-toggler/navbar-toggler-container';
import { Link } from 'react-router-dom';
import './header-component.css';

const HeaderComponent = () => {
  return (
    <div className="pos-f-t fixed-top header">
      <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-md">
        <button className="navbar-toggler navbar-toggler-right">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">
          {process.env.REACT_APP_WEBSITE_NAME}
        </Link>
        <NavbarTogglerContainer />
      </nav>
    </div>
  );
}

export default HeaderComponent;
