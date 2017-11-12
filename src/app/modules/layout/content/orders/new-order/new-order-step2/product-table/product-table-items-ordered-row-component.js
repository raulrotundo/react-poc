import React from 'react';

const ProductTableItemsOrderedRowComponent = (props) => {
  const { item, removeToCart } = props;
  return (
    <tr>
      <td>{item.productDetail.name}</td>
      <td className="text-right">${item.productDetail.price}</td>
      <td className="text-center">{item.qty}</td>
      <td className="text-right">${item.subTotal}</td>
      <td className="text-center">
        <button className="btn btn-danger btn-circle" onClick={() => removeToCart(item.productDetail._id)}>
          <i className="fa fa-minus" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  );
}

export default ProductTableItemsOrderedRowComponent;
