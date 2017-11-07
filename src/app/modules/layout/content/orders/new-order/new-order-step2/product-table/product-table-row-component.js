import React from 'react';
import { Link } from 'react-router-dom';

const ProductTableRowComponent = (props) => {
  const { product } = props;
  return (
    <tr>
      <td><Link to={product.img} target="_blank">{product.name}</Link></td>
      <td>{product.price}</td>
      <td><input type="checkbox" /></td>
      <td><input type="number" /></td>
    </tr>
  );
}

export default ProductTableRowComponent;
