import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewOrderStep3Component from './new-order-step3-component';
import { setNewOrderStep } from 'redux/actions/new-order';

class NewOrderStep3Container extends Component {

  constructor(props) {
    super(props);
    this.getNewOrderStep = this.getNewOrderStep.bind(this);
  }

  getNewOrderStep(stepSelected) {
    this.props.getNewOrderStep(stepSelected);
  }

  render() {
    return <NewOrderStep3Component
      activeStep={this.props.form.orderStep}
      getNewOrderStep={this.getNewOrderStep}
    />;
  }
}

NewOrderStep3Container.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderStep3Container);