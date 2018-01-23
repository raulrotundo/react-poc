import React from 'react';
import './new-order-steps-component.css';

const NewOrderStepsComponent = (props) => {
  const { activeStep } = props;
  return (
    <div className="new-order-step">
      <div className="container col-md-offset-3">
        <div className="panel">
          <div className="step">
            <button className={"btn btn-" + (activeStep === 1 ? 'primary' : 'default') + " btn-circle"}>1</button>
            <p>Step 1</p>
          </div>
          <div className="step">
            <button className={"btn btn-" + (activeStep === 2 ? 'primary' : 'default') + " btn-circle"}>2</button>
            <p>Step 2</p>
          </div>
          <div className="step">
            <button className={"btn btn-" + (activeStep === 3 ? 'primary' : 'default') + " btn-circle"}>3</button>
            <p>Step 3</p>
          </div>
          <div className="step">
            <button className={"btn btn-" + (activeStep === 4 ? 'primary' : 'default') + " btn-circle"}>4</button>
            <p>Step 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewOrderStepsComponent;
