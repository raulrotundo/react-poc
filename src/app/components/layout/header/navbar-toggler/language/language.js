import React, { Component } from 'react';

class Language extends Component {
  render() {
    return (
      <li className="nav-item dropdown">
        <a href="/" className="nav-link">
          <i className="fa fa-language"></i> Language <b className="caret"></b>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="/">English</a>
          <a className="dropdown-item" href="/">French</a>
          <a className="dropdown-item" href="/">Urdu</a>
        </div>
      </li>
    );
  }
}

export default Language;
