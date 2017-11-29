import React from 'react';
import { Link } from 'react-router-dom';

const NewOrderStepNavigationComponent = (props) => {
  const { activeStep, getNewOrderStep, newOrderBaseUrl } = props;
  const previousLabel = activeStep === 1 ? null : activeStep - 1;
  const nextLabel = activeStep === 4 ? null : activeStep + 1;

  return (
    <div>
      {previousLabel &&
        <div className="float-left">
          <Link to={`${newOrderBaseUrl}/step` + previousLabel}>
            <button onClick={() => getNewOrderStep(previousLabel)} className="btn btn-primary btn-circle">Previous</button>
          </Link>
        </div>
      }
      {nextLabel &&
        <div className="float-right">
          <Link to={`${newOrderBaseUrl}/step` + nextLabel}>
            <button onClick={() => getNewOrderStep(nextLabel)} className="btn btn-primary btn-circle">Next</button>
          </Link>
        </div>
      }
    </div>
  );
}

export default NewOrderStepNavigationComponent;
