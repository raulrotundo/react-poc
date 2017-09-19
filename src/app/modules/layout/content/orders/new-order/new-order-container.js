import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewOrderComponent from './new-order-component';
import { setNewOrderStep } from './new-order-actions';

class NewOrderContainer extends Component {

  constructor(props) {
    super(props);
    this.getNewOrderStep = this.getNewOrderStep.bind(this);
  }

  getNewOrderStep(stepSelected) {
    this.props.getNewOrderStep(stepSelected);
  }

  render() {
    return <NewOrderComponent activeStep={this.props.form.orderStep} getNewOrderStep={this.getNewOrderStep} />;
  }
}

const mapStateToProps = state => {
  return state.newOrder;
}

const mapDispatchToProps = dispatch => {
  return {
    getNewOrderStep: (step) => { dispatch(setNewOrderStep(step)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderContainer);