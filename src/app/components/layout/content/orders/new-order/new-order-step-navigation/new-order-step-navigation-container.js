import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewOrderStepNavigationComponent from './new-order-step-navigation-component';
import { setNewOrderStep } from 'redux/actions/new-order';

class NewOrderStepNavigationContainer extends Component {

  constructor(props) {
    super(props);
    this.getNewOrderStep = this.getNewOrderStep.bind(this);
  }

  getNewOrderStep(stepSelected) {
    this.props.getNewOrderStep(stepSelected);
  }

  render() {
    return <NewOrderStepNavigationComponent
      activeStep={this.props.form.orderStep}
      getNewOrderStep={this.getNewOrderStep}
      newOrderBaseUrl={this.props.match.url}
    />;
  }
}

NewOrderStepNavigationContainer.propTypes = {
  form: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderStepNavigationContainer);