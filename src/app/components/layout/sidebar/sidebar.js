import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <ul className="list-group">
          <Link to="/app" className="list-group-item">
            <i className="fa fa-fw fa-dashboard"></i>&nbsp;Dashboard
          </Link>
          <Link to="/app/blank-page" className="list-group-item">
            <i className="fa fa-file-o"></i>&nbsp;Blank page
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
