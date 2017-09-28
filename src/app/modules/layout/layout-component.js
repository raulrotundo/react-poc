import React from 'react';
import { Route, Switch } from 'react-router-dom';
import withTracker from 'utils/withTracker';
import HeaderContainer from './header/header-container';
import SidebarContainer from './sidebar/sidebar-container';
import NewOrderContainer from './content/orders/new-order/new-order-container';
import ReviewOrdersContainer from './content/orders/review-orders/review-orders-container';
import DashboardContainer from './content/dashboard/dashboard-container';
import NotFoundContentComponent from './not-found-content/not-found-content-component'
import './layout-component.css';

const LayoutComponent = (props) => {
  const { match } = props;
  return (
    <div>
      <HeaderContainer />
      <SidebarContainer />
      <section className="main-container">
        <Switch>
          <Route exact path={match.url} component={DashboardContainer} />
          <Route exact path={`${match.url}/orders/review-orders`} component={ReviewOrdersContainer} />
          <Route path={`${match.url}/orders/new-order`} component={NewOrderContainer} />
          <Route component={withTracker(NotFoundContentComponent)}></Route>
        </Switch>
      </section>
    </div>
  );
}

export default LayoutComponent;
