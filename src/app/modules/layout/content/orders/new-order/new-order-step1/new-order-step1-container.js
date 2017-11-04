import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewOrderStep1Component from './new-order-step1-component';
import {
  setNewOrderStep,
  customerSearch,
  handleTypeaheadCustomerInputChange,
  isBillingAddressInputsVisible
} from 'redux/actions/new-order';

class NewOrderStep1Container extends Component {

  constructor(props) {
    super(props);
    this.getNewOrderStep = this.getNewOrderStep.bind(this);
    this.renderMenuItemChildren = this.renderMenuItemChildren.bind(this);
    this.customerSearch = this.customerSearch.bind(this);
    this.handleCustomerSearchChange = this.handleCustomerSearchChange.bind(this);
    this.toggleDeliveryAddressChange = this.toggleDeliveryAddressChange.bind(this);
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

  customerSearch(query) {
    if (!query) return;
    this.props.customerSearch(query);
  }

  handleCustomerSearchChange(value) {
    if (value.length > 0 && typeof value[0].name !== 'undefined') {
      this.props.handleTypeaheadCustomerInputChange(value[0].name);
    } else if (value.length === 0) {
      this.props.handleTypeaheadCustomerInputChange('');
    }
  }

  toggleDeliveryAddressChange() {
    this.props.isBillingAddressInputsVisible(!this.props.form.step1.isBillingAddressInputsVisible)
  }

  render() {
    return <NewOrderStep1Component
      form={this.props.form}
      getNewOrderStep={this.getNewOrderStep}
      customerSearch={this.customerSearch}
      renderMenuItemChildren={this.renderMenuItemChildren}
      inputTypeahead={this.props.form.step1.inputTypeahead}
      handleCustomerSearchChange={this.handleCustomerSearchChange}
      toggleDeliveryAddressChange={this.toggleDeliveryAddressChange}
    />;
  }
}

NewOrderStep1Container.propTypes = {
  form: PropTypes.object.isRequired,
  getNewOrderStep: PropTypes.func.isRequired,
  customerSearch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return state.newOrder;
}

const mapDispatchToProps = dispatch => {
  return {
    getNewOrderStep: (step) => dispatch(setNewOrderStep(step)),
    customerSearch: (query) => dispatch(customerSearch(query)),
    handleTypeaheadCustomerInputChange: (value) => dispatch(handleTypeaheadCustomerInputChange(value)),
    isBillingAddressInputsVisible: (isVisible) => dispatch(isBillingAddressInputsVisible(isVisible))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderStep1Container);