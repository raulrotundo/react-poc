import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewOrderStep1Component from './new-order-step1-component';
import { setNewOrderStep, handleTypeaheadCustomerSearch } from 'redux/actions/new-order';

class NewOrderStep1Container extends Component {

  constructor(props) {
    super(props);
    this.getNewOrderStep = this.getNewOrderStep.bind(this);
    this.renderMenuItemChildren = this.renderMenuItemChildren.bind(this);
    this.handleTypeaheadCustomerSearch = this.handleTypeaheadCustomerSearch.bind(this);
  }

  getNewOrderStep(stepSelected) {
    this.props.getNewOrderStep(stepSelected);
  }

  renderMenuItemChildren(option, props, index) {
    return (
      <div key={option._id}>
        <span>{option.name}</span>
      </div>
    );
  }

  handleTypeaheadCustomerSearch(query) {
    if (!query) return;

    this.props.handleTypeaheadCustomerSearch(query);
  }

  render() {
    return <NewOrderStep1Component
      activeStep={this.props.form.orderStep}
      getNewOrderStep={this.getNewOrderStep}
      handleTypeaheadCustomerSearch={this.handleTypeaheadCustomerSearch}
      renderMenuItemChildren={this.renderMenuItemChildren}
      inputTypeahead={this.props.form.step1.inputTypeahead}
    />;
  }
}

NewOrderStep1Container.propTypes = {
  form: PropTypes.object.isRequired,
  getNewOrderStep: PropTypes.func.isRequired,
  handleTypeaheadCustomerSearch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return state.newOrder;
}

const mapDispatchToProps = dispatch => {
  return {
    getNewOrderStep: (step) => { dispatch(setNewOrderStep(step)) },
    handleTypeaheadCustomerSearch: (query) => { dispatch(handleTypeaheadCustomerSearch(query)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderStep1Container);