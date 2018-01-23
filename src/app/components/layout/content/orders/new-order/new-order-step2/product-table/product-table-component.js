import React from 'react';
import ProductTableRowComponent from './product-table-row-component';
import ProductTableRowNotFoundComponent from './product-table-row-not-found-component';

const ProductTableComponent = (props) => {
  const {
    products,
    isProductListLoading,
    addToCart
  } = props;
  let rows = [];

  if (Object.keys(products).length > 0) {
    products.forEach((product) => {
      rows.push(
        <ProductTableRowComponent
          product={product}
          key={product._id}
          addToCart={addToCart}
        />
      );
    });
  } else {
    rows = <ProductTableRowNotFoundComponent />;
  }

  return (
    <div>
      <table className="table table-sm table-bordered">
        <thead>
          <tr>
            <th className="text-center">Name</th>
            <th className="text-center">Price</th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody>{isProductListLoading ? <tr><td colSpan="3" className="text-center">Loading...</td></tr> : rows}</tbody>
      </table>
    </div>
  );
}

export default ProductTableComponent;
