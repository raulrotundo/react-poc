import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageHeaderComponent from 'modules/shared/page-header/page-header-component';
import NewOrderStepsComponent from './new-order-steps/new-order-steps-component';
import NewOrderStep1Component from './new-order-step1/new-order-step1-component';
import NewOrderStep2Component from './new-order-step2/new-order-step2-component';
import NewOrderStep3Component from './new-order-step3/new-order-step3-component';
import NewOrderStep4Component from './new-order-step4/new-order-step4-component';

const NewOrderComponent = (props) => {
  const { activeStep, getNewOrderStep, match } = props;
  return (
    <div>
      <PageHeaderComponent heading="New Order" />
      <div className="row">
        <div className="col-xl-12">
          <NewOrderStepsComponent
            activeStep={activeStep}
            getNewOrderStep={getNewOrderStep}
            newOrderBaseUrl={match.url}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <Switch>
            <Route exact path={`${match.url}/step1`} render={(props) => (
              <NewOrderStep1Component activeStep={activeStep} />
            )} />
            <Route exact path={`${match.url}/step2`} render={(props) => (
              <NewOrderStep2Component activeStep={activeStep} />
            )} />
            <Route exact path={`${match.url}/step3`} render={(props) => (
              <NewOrderStep3Component activeStep={activeStep} />
            )} />
            <Route exact path={`${match.url}/step4`} render={(props) => (
              <NewOrderStep4Component activeStep={activeStep} />
            )} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default NewOrderComponent;
