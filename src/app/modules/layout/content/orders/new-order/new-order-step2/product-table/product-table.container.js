import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts } from 'redux/actions/new-order';
import ProductSearchBarComponent from './product-table-search-bar-component';
import ProductTableComponent from './product-table-component';
import ProductTablePaginationComponent from './product-table-pagination-component';

class ProductTableContainer extends Component {

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <ProductSearchBarComponent />
        <ProductTableComponent
          products={this.props.products}
        />
        <ProductTablePaginationComponent />
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
    getProducts: () => { dispatch(getProducts()) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTableContainer);