import React from 'react';
import ProductTableRowComponent from './product-table-row-component';
import ProductTableItemsOrderedComponent from './product-table-items-ordered-component';

const ProductTableComponent = (props) => {
  const {
    products,
    isProductListLoading,
    addToCart,
    cart
  } = props;
  const rows = [];

  products.forEach((product) => {
    rows.push(
      <ProductTableRowComponent
        product={product}
        key={product._id}
        addToCart={addToCart}
      />
    );
  });

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
      {Object.keys(cart.items).length > 0 && <ProductTableItemsOrderedComponent cart={cart} />}      
    </div>
  );
}

export default ProductTableComponent;
