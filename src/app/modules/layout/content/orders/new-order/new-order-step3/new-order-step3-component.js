import React from 'react';
import NewOrderStep3ItemsOrderedComponent from './new-order-step3-items-ordered-component';

const NewOrderStep3Component = (props) => {
  const { activeStep, cart } = props;
  return (
    <div className="card">
      <div className="card-header">Step {activeStep} - Confirmation</div>
      <div className="card-block">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {
                Object.keys(cart.items).length > 0 &&
                <NewOrderStep3ItemsOrderedComponent
                  cart={cart}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewOrderStep3Component;
