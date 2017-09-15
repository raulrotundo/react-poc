import React, { Component } from 'react';
import NewOrder from './components/new-order';

class NewOrderContainer extends Component {

  constructor() {
    super();
    this.state = {
      activeStep: 1
    }
  }

  showStepContent(stepSelected) {
    console.log(stepSelected);
  }

  render() {
    return <NewOrder activeStep={this.state.activeStep} showStepContent={this.showStepContent} />;
  }
}

export default NewOrderContainer;