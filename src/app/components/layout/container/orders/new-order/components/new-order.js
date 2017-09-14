import React from 'react';
import PageHeader from 'components/shared/page-header/page-header';
import NewOrderSteps from './new-order-steps';
import NewOrderStep1 from './new-order-step1';

const NewOrder = (props) => {
  const { activeStep, showStepContent } = props;
  return (
    <div>
      <PageHeader heading="New Order" />
      <div className="row">
        <div className="col-xl-12">
          <NewOrderSteps activeStep={activeStep} showStepContent={showStepContent} />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <NewOrderStep1 />
        </div>
      </div>
    </div>
  );
}

export default NewOrder;
