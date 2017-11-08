import React from 'react';
import { Link } from 'react-router-dom';

const ProductTableRowComponent = (props) => {
  const { product } = props;
  return (
    <tr>
      <td><Link to={product.img} target="_blank">{product.name}</Link></td>
      <td>{product.price}</td>
      <td>
        <div className="btn-group">
          <button className="btn btn-success btn-circle">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
          <button className="btn btn-danger btn-circle">
            <i className="fa fa-minus" aria-hidden="true"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ProductTableRowComponent;
