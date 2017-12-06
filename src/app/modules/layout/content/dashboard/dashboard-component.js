import React from 'react';
import StatComponent from 'modules/shared/stat/stat-component';

const DashboardComponent = () => {
  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-xl-3 col-lg-6">
          <StatComponent cardClass="card-primary" title="Title 1" />
        </div>
        <div className="col-xl-3 col-lg-6">
          <StatComponent cardClass="card-info" title="Title 2" />
        </div>
        <div className="col-xl-3 col-lg-6">
          <StatComponent cardClass="card-success" title="Title 3" />
        </div>
        <div className="col-xl-3 col-lg-6">
          <StatComponent cardClass="card-danger" title="Title 4" />
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
