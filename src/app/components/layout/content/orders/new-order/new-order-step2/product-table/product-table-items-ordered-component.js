import React from 'react';
import ProductTableItemsOrderedRwow from './product-table-items-ordered-row-component';

const ProductTableItemsOrderedComponent = (props) => {
  const { cart, removeToCart } = props;
  const rows = [];

  for (let item in cart.items) {
    rows.push(
      <ProductTableItemsOrderedRwow
        key={item}
        item={cart.items[item]}
        removeToCart={removeToCart}
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
              <th className="text-center">Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Qty</th>
              <th className="text-center">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="text-right">Total:</td>
              <td className="text-right">${cart.total}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default ProductTableItemsOrderedComponent;
