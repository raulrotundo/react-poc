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

  constructor(props) {
    super(props);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts(filters) {
    const filtersMerged = Object.assign({}, this.props.filters, filters);
    this.props.getProducts(filtersMerged);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            Show &nbsp;
            <select name="showEntries" onChange={event => this.getProducts({ items_per_page: event.target.value })}>
              <option>5</option>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
            </select>
            &nbsp; Entries
          </div>
          <div className="col-6">
            <div className="col-12">
              <div className="pull-right">
                <ProductSearchBarComponent getProducts={this.getProducts} />
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
            {
              !this.props.isProductListLoading && this.props.total_rows > 0 &&
              <ProductTableShowEntries
                pageNumber={this.props.page}
                totalPages={this.props.total_pages}
                totalRows={this.props.total_rows}
              />
            }
          </div>
          <div className="col-6">
            <div className="pull-right">
              <ProductTablePaginationComponent />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {
              Object.keys(this.props.cart.items).length > 0 &&
              <ProductTableItemsOrderedComponent
                cart={this.props.cart}
                removeToCart={this.props.removeToCart}
              />
            }
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
    getProducts: (query) => { dispatch(getProducts(query)) },
    addToCart: (productId) => { dispatch(addToCart(productId)) },
    removeToCart: (productId) => { dispatch(removeToCart(productId)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTableContainer);