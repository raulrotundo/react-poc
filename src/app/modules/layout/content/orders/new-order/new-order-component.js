import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageHeaderComponent from 'modules/shared/page-header/page-header-component';
import NewOrderStepsComponent from './new-order-steps/new-order-steps-component';
import NewOrderStep1Container from './new-order-step1/new-order-step1-container';
import NewOrderStep2Container from './new-order-step2/new-order-step2-container';
import NewOrderStep3Container from './new-order-step3/new-order-step3-container';
import NewOrderStep4Container from './new-order-step4/new-order-step4-container';
import NewOrderStepNavigationContainer from './new-order-step-navigation/new-order-step-navigation-container';

const NewOrderComponent = (props) => {
  const { activeStep, match } = props;
  return (
    <div>
      <PageHeaderComponent heading="New Order" />
      <div className="row">
        <div className="col-xl-12">
          <NewOrderStepsComponent activeStep={activeStep} />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <Switch>
            <Route exact path={`${match.url}/step1`} render={(props) => (
              <NewOrderStep1Container />
            )} />
            <Route exact path={`${match.url}/step2`} render={(props) => (
              <NewOrderStep2Container />
            )} />
            <Route exact path={`${match.url}/step3`} render={(props) => (
              <NewOrderStep3Container />
            )} />
            <Route exact path={`${match.url}/step4`} render={(props) => (
              <NewOrderStep4Container />
            )} />
          </Switch>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-xl-12">
          <NewOrderStepNavigationContainer match={match} />
        </div>
      </div>
    </div>
  );
}

export default NewOrderComponent;
