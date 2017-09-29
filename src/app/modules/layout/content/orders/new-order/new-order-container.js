import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewOrderComponent from './new-order-component';
import { setNewOrderStep } from 'redux/actions/new-order';

class NewOrderContainer extends Component {

  constructor(props) {
    super(props);
    this.getNewOrderStep = this.getNewOrderStep.bind(this);
  }

  getNewOrderStep(stepSelected) {
    this.props.getNewOrderStep(stepSelected);
  }

  render() {
    return <NewOrderComponent
      activeStep={this.props.form.orderStep}
      getNewOrderStep={this.getNewOrderStep}
      match={this.props.match}
    />;
  }
}

NewOrderContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderContainer);