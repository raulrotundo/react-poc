import React from 'react';

const NewOrderStep3ItemsOrderedRowComponent = (props) => {
  const { item } = props;
  return (
    <tr>
      <td>{item.productDetail.name}</td>
      <td className="text-right">${item.productDetail.price}</td>
      <td className="text-center">{item.qty}</td>
      <td className="text-right">${item.subTotal}</td>
    </tr>
  );
}

export default NewOrderStep3ItemsOrderedRowComponent;
