import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts } from 'redux/actions/new-order';
import ProductSearchBarComponent from './product-table-search-bar-component';
import ProductTableComponent from './product-table-component';
import ProductTablePaginationComponent from './product-table-pagination-component';
import ProductTableItemsOrderedComponent from './product-table-items-ordered-component';
import ProductTableShowEntries from './product-table-show-entries-component';
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
              cart={this.props.cart}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ProductTableShowEntries
              pageNumber={this.props.page}
              totalPages={this.props.total_pages}
              totalRows={this.props.total_rows}
            />
          </div>
          <div className="col-6">
            <div className="pull-right">
              <ProductTablePaginationComponent />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {Object.keys(this.props.cart.items).length > 0 && <ProductTableItemsOrderedComponent cart={this.props.cart} removeToCart={this.props.removeToCart} />}
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