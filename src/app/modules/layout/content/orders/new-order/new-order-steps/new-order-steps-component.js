import React from 'react';
import { Link } from 'react-router-dom';
import './new-order-steps-component.css';

const NewOrderStepsComponent = (props) => {
  const { activeStep, getNewOrderStep, newOrderBaseUrl } = props;
  return (
    <div className="new-order-step">
      <div className="container col-md-offset-3">
        <div className="panel">
          <div className="step">
            <Link to={`${newOrderBaseUrl}/step1`}>
              <button onClick={() => getNewOrderStep(1)} className={"btn btn-" + (activeStep === 1 ? 'primary' : 'default') + " btn-circle"}>1</button>
            </Link>
            <p>Step 1</p>
          </div>
          <div className="step">
            <Link to={`${newOrderBaseUrl}/step2`}>
              <button onClick={() => getNewOrderStep(2)} className={"btn btn-" + (activeStep === 2 ? 'primary' : 'default') + " btn-circle"}>2</button>
            </Link>
            <p>Step 2</p>
          </div>
          <div className="step">
            <Link to={`${newOrderBaseUrl}/step3`}>
              <button onClick={() => getNewOrderStep(3)} className={"btn btn-" + (activeStep === 3 ? 'primary' : 'default') + " btn-circle"}>3</button>
            </Link>
            <p>Step 3</p>
          </div>
          <div className="step">
            <Link to={`${newOrderBaseUrl}/step4`}>
              <button onClick={() => getNewOrderStep(4)} className={"btn btn-" + (activeStep === 4 ? 'primary' : 'default') + " btn-circle"}>4</button>
            </Link>
            <p>Step 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewOrderStepsComponent;
