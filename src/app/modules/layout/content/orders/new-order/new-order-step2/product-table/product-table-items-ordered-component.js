import React from 'react';
import ProductTableItemsOrderedRwow from './product-table-items-ordered-row-component';

const ProductTableItemsOrderedComponent = (props) => {
  const { cart } = props;
  const rows = [];

  for (let item in cart.items) {
    rows.push(
      <ProductTableItemsOrderedRwow
        key={item}
        item={cart.items[item]}
      />
    );
  };

  return (
    <div className="card">
      <div className="card-header">Items Ordered</div>
      <div className="card-block">
        <table className="table table-sm table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="text-right">Total:</td>
              <td>{cart.total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default ProductTableItemsOrderedComponent;
