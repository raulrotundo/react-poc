import React from 'react';

const NewOrderStep1Component = (props) => {
  const { activeStep } = props;
  return (
    <div className="card">
      <div className="card-header">Step {activeStep} - Billing Information</div>
      <div className="card-block">
        <div className="form-group">
          Typeahead component
        </div>
        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input type="text" id="street" name="street" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="street">Zipcode:</label>
          <input type="text" id="zipcode" name="zipcode" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="street">State:</label>
          <input type="text" id="state" name="state" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="street">City:</label>
          <input type="text" id="city" name="city" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" name="country" className="form-control" />
        </div>
      </div>
    </div>
  );
}

export default NewOrderStep1Component;
