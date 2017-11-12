import React from 'react';
import { Link } from 'react-router-dom';

const ProductTableRowComponent = (props) => {
  const {
    product,
    addToCart
  } = props;

  return (
    <tr>
      <td><Link to={product.img} target="_blank">{product.name}</Link></td>
      <td className="text-right">${product.price}</td>
      <td className="text-center">
        <div className="btn-group">
          <button className="btn btn-success btn-circle" onClick={() => addToCart(product._id)}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ProductTableRowComponent;
