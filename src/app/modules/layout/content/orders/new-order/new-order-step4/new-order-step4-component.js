import React from 'react';

const NewOrderStep4Component = (props) => {
  const { activeStep } = props;
  return (
    <div className="card">
      <div className="card-header">Step {activeStep} - Checkout</div>
      <div className="card-block">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p>Thanks for your purchase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewOrderStep4Component;
