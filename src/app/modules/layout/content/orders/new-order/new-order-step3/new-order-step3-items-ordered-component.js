import React from 'react';
import NewOrderStep3ItemsOrderedRowComponent from './new-order-step3-items-ordered-row-component';

const NewOrderStep3ItemsOrderedComponent = (props) => {
  const { cart } = props;
  const rows = [];

  for (let item in cart.items) {
    rows.push(
      <NewOrderStep3ItemsOrderedRowComponent
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
              <th className="text-center">Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Qty</th>
              <th className="text-center">Subtotal</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="text-right">Total:</td>
              <td className="text-right">${cart.total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default NewOrderStep3ItemsOrderedComponent;
