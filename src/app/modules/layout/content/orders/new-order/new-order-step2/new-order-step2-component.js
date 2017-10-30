import React from 'react';

const NewOrderStep2Component = (props) => {
  const { activeStep } = props;
  return (
    <div className="card">
      <div className="card-header">Step {activeStep} - Add to Cart</div>
      <div className="card-block">
        Step {activeStep} Content
        </div>
    </div>
  );
}

export default NewOrderStep2Component;
