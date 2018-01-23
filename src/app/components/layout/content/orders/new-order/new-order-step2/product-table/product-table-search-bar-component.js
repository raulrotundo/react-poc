import React from 'react';

const ProductSearchBarComponent = (props) => {
  const { getProducts } = props; 
  return (
    <div className="form-group">
      <input type="text" placeholder="Search..." onChange={event => getProducts({ q: event.target.value })} />
    </div>
  );
}

export default ProductSearchBarComponent;
