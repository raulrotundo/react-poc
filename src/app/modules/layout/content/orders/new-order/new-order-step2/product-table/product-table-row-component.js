import React from 'react';

const ProductTableRowComponent = (props) => {
  const { product } = props;
  return (
    <tr>
      <td><img src={product.img} alt={product.name} /></td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td><input type="checkbox" /></td>
      <td><input type="number" /></td>
    </tr>
  );
}

export default ProductTableRowComponent;
