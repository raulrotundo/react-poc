import React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

const NewOrderStep1Component = (props) => {
  const {
    activeStep,
    customerSearch,
    renderMenuItemChildren,
    inputTypeahead,
    handleCustomerSearchChange
  } = props;

  return (
    <div className="card">
      <div className="card-header">Step {activeStep} - Billing Information</div>
      <div className="card-block">
        <div className="form-group">
          <label htmlFor="street">Customer:</label>
          <AsyncTypeahead
            {...inputTypeahead}
            labelKey="name"
            onSearch={customerSearch}
            onChange={handleCustomerSearchChange}
            renderMenuItemChildren={renderMenuItemChildren}
          />
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
