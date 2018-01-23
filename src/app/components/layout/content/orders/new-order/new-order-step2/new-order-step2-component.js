import React from 'react';
import ProductTableContainer from './product-table/product-table.container';

const NewOrderStep2Component = (props) => {
  const { activeStep } = props;
  return (
    <div className="card">
      <div className="card-header">Step {activeStep} - Add to Cart</div>
      <div className="card-block">
        <ProductTableContainer />
      </div>
    </div>
  );
}

export default NewOrderStep2Component;
