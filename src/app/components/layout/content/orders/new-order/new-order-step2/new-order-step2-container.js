import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewOrderStep2Component from './new-order-step2-component';
import { setNewOrderStep } from 'redux/actions/new-order';

class NewOrderStep2Container extends Component {

  constructor(props) {
    super(props);
    this.getNewOrderStep = this.getNewOrderStep.bind(this);
  }

  getNewOrderStep(stepSelected) {
    this.props.getNewOrderStep(stepSelected);
  }

  render() {
    return <NewOrderStep2Component
      activeStep={this.props.form.orderStep}
      getNewOrderStep={this.getNewOrderStep}
    />;
  }
}

NewOrderStep2Container.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderStep2Container);