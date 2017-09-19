import React from 'react';
import PageHeader from 'modules/shared/page-header/page-header';
import NewOrderSteps from './new-order-steps/new-order-steps';
import NewOrderStep1 from './new-order-step1/new-order-step1';

const NewOrder = (props) => {
  const { activeStep, getNewOrderStep } = props;
  return (
    <div>
      <PageHeader heading="New Order" />
      <div className="row">
        <div className="col-xl-12">
          <NewOrderSteps activeStep={activeStep} getNewOrderStep={getNewOrderStep} />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <NewOrderStep1 activeStep={activeStep} />
        </div>
      </div>
    </div>
  );
}

export default NewOrder;
