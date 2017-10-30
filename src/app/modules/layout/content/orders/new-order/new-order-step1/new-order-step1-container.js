import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewOrderStep1Component from './new-order-step1-component';
import { setNewOrderStep } from 'redux/actions/new-order';

class NewOrderStep1Container extends Component {

  constructor(props) {
    super(props);
    this.getNewOrderStep = this.getNewOrderStep.bind(this);
  }

  getNewOrderStep(stepSelected) {
    this.props.getNewOrderStep(stepSelected);
  }

  render() {
    return <NewOrderStep1Component
      activeStep={this.props.form.orderStep}
      getNewOrderStep={this.getNewOrderStep}
    />;
  }
}

NewOrderStep1Container.propTypes = {
  form: PropTypes.object.isRequired,
  getNewOrderStep: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return state.newOrder;
}

const mapDispatchToProps = dispatch => {
  return {
    getNewOrderStep: (step) => { dispatch(setNewOrderStep(step)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderStep1Container);