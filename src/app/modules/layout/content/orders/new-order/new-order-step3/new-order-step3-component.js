import React from 'react';

const NewOrderStep3Component = (props) => {
  const { activeStep } = props;
  return (
    <div className="card">
      <div className="card-header">Step {activeStep} - Confirmation</div>
      <div className="card-block">
        Step {activeStep} Content
        </div>
    </div>
  );
}

export default NewOrderStep3Component;
