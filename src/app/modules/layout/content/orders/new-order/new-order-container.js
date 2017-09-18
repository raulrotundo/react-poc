import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewOrder from './components/new-order';
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
    return <NewOrder activeStep={this.props.form.orderStep} getNewOrderStep={this.getNewOrderStep} />;
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