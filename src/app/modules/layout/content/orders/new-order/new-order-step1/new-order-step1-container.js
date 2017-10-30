import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewOrderStep1Component from './new-order-step1-component';
import { setNewOrderStep } from 'redux/actions/new-order';

class NewOrderStep1Container extends Component {

  constructor(props) {
    super(props);
    this.getNewOrderStep = this.getNewOrderStep.bind(this);
    this.renderMenuItemChildren = this.renderMenuItemChildren.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getNewOrderStep(stepSelected) {
    this.props.getNewOrderStep(stepSelected);
  }

  renderMenuItemChildren(option, props, index) {
    return (
      <div key={option.id}>
        <input type="text" name="customer" value={option.name} />
        <span>{option.name}</span>
      </div>
    );
  }

  handleSearch(query) {
    if (!query) return;

    this.props.handleSearch(query);
  }

  render() {
    return <NewOrderStep1Component
      activeStep={this.props.form.orderStep}
      getNewOrderStep={this.getNewOrderStep}
      handleSearch={this.handleSearch}
      renderMenuItemChildren={this.renderMenuItemChildren}
      inputTypeahead={this.props.form.step1.inputTypeahead}
    />;
  }
}

NewOrderStep1Container.propTypes = {
  form: PropTypes.object.isRequired,
  getNewOrderStep: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  renderMenuItemChildren: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return state.newOrder;
}

const mapDispatchToProps = dispatch => {
  return {
    getNewOrderStep: (step) => { dispatch(setNewOrderStep(step)) },
    renderMenuItemChildren: (option, props, index) => { console.log('renderMenuItemChildren') },
    handleSearch: (query) => { console.log('dispatch handleSearch action', query) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderStep1Container);