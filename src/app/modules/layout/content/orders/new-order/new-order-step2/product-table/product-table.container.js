import React, { Component } from 'react';
import ProductSearchBarComponent from './product-table-search-bar-component';
import ProductTableComponent from './product-table-component';
import ProductTablePaginationComponent from './product-table-pagination-component';

class ProductTableContainer extends Component {

  render() {
    const PRODUCTS = [
      { _id: '1', name: 'Sporting Goods', price: '$49.99', img: 'http://via.placeholder.com/150x150' },
      { _id: '2', name: 'Sporting Goods', price: '$9.99', img: 'http://via.placeholder.com/150x150' },
      { _id: '3', name: 'Sporting Goods', price: '$29.99', img: 'http://via.placeholder.com/150x150' },
      { _id: '4', name: 'Electronics', price: '$99.99', img: 'http://via.placeholder.com/150x150' },
      { _id: '5', name: 'Electronics', price: '$399.99', img: 'http://via.placeholder.com/150x150' },
      { _id: '6', name: 'Electronics', price: '$199.99', img: 'http://via.placeholder.com/150x150' }
    ];

    return (
      <div>
        <ProductSearchBarComponent />
        <ProductTableComponent products={PRODUCTS} />
        <ProductTablePaginationComponent />
      </div>
    );
  }
}

export default ProductTableContainer;