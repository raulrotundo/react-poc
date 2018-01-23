import React from 'react';
import { Link } from 'react-router-dom';

const PageHeaderComponent = (props) => {
  const { heading } = props;
  return (
    <div className="row">
      <div className="col-xl-12">
        <h2 className="page-header">
          {heading}
        </h2>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <i className="fa fa-dashboard"></i> <Link to="/app">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active"> {heading}</li>
        </ol>
      </div>
    </div >
  );
}

export default PageHeaderComponent;
