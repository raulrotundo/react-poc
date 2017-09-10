import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageHeader extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xl-12">
          <h2 className="page-header">
            {this.props.heading}
          </h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <i className="fa fa-dashboard"></i> <Link to="/app">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active"> {this.props.heading}</li>
          </ol>
        </div>
      </div >
    );
  }
}

export default PageHeader;
