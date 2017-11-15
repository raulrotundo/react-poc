import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts } from 'redux/actions/new-order';
import ProductSearchBarComponent from './product-table-search-bar-component';
import ProductTableComponent from './product-table-component';
import ProductTablePaginationComponent from './product-table-pagination-component';
import { addToCart, removeToCart } from 'redux/actions/new-order';

class ProductTableContainer extends Component {

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            Show &nbsp;
            <select name="showEntries">
              <option>5</option>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            &nbsp; Entries
          </div>
          <div className="col-6">
            <div className="col-12">
              <div className="pull-right">
                <ProductSearchBarComponent />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ProductTableComponent
              products={this.props.products}
              isProductListLoading={this.props.isProductListLoading}
              addToCart={this.props.addToCart}
              removeToCart={this.props.removeToCart}
              cart={this.props.cart}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            Showing 1 to 10 of 57 entries
          </div>
          <div className="col-6">
            <div className="pull-right">
              <ProductTablePaginationComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductTableContainer.propTypes = {
  getProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return state.newOrder.form.step2;
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => { dispatch(getProducts()) },
    addToCart: (productId) => { dispatch(addToCart(productId)) },
    removeToCart: (productId) => { dispatch(removeToCart(productId)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTableContainer);