import React from 'react';

const ProductTableItemsOrderedRowComponent = (props) => {
  const { item } = props;
  return (
    <tr>
      <td>{item.productDetail.name}</td>
      <td>{item.productDetail.price}</td>
      <td>{item.qty}</td>
      <td>{item.qty * item.productDetail.price}</td>
    </tr>
  );
}

export default ProductTableItemsOrderedRowComponent;
