import React, { Component } from 'react';
import './sidebar.css';
//import { FormControl, Button, Image, NavLink } from 'react-bootstrap';

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <ul className="list-group">
          <a className="list-group-item">
            <i className="fa fa-fw fa-dashboard"></i>&nbsp;Dashboard
          </a>
          <a className="list-group-item">
            <i className="fa fa-file-o"></i>&nbsp;Blank page
          </a>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
