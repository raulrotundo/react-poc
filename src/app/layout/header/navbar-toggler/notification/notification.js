import React, { Component } from 'react';

class Notification extends Component {
  render() {
    return (
      <li className="nav-item dropdown">
        <a href="/" className="nav-link">
          <i className="fa fa-bell"></i> <b className="caret"></b><span className="sr-only">(current)</span>
        </a>
        <ul className="dropdown-menu dropdown-menu-right">
          <a href="/" className="dropdown-item">Pending Task <span className="badge badge-info">6</span></a>
          <a href="/" className="dropdown-item">In queue <span className="badge badge-info"> 13</span></a>
          <a href="/" className="dropdown-item">Mail <span className="badge badge-info"> 45</span></a>
          <li className="dropdown-divider"></li>
          <a href="/" className="dropdown-item">View All</a>
        </ul>
      </li>
    );
  }
}

export default Notification;
