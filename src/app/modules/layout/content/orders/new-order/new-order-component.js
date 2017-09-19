import React from 'react';
import PageHeader from 'modules/shared/page-header/page-header';
import NewOrderStepsComponent from './new-order-steps/new-order-steps-component';
import NewOrderStep1Component from './new-order-step1/new-order-step1-component';

const NewOrder = (props) => {
  const { activeStep, getNewOrderStep } = props;
  return (
    <div>
      <PageHeader heading="New Order" />
      <div className="row">
        <div className="col-xl-12">
          <NewOrderStepsComponent activeStep={activeStep} getNewOrderStep={getNewOrderStep} />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <NewOrderStep1Component activeStep={activeStep} />
        </div>
      </div>
    </div>
  );
}

export default NewOrder;
