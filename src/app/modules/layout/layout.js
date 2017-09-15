import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import NewOrderContainer from './content/orders/new-order/new-order-container';
import ReviewOrdersContainer from './content/orders/review-orders/review-orders-container';
import DashboardContainer from './content/dashboard/dashboard-container';
import './layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.match = props.match;
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <section className="main-container">
          <Switch>
            <Route exact path={this.match.url} component={DashboardContainer} />
            <Route exact path={`${this.match.url}/orders/review-orders`} component={ReviewOrdersContainer} />
            <Route exact path={`${this.match.url}/orders/new-order`} component={NewOrderContainer} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default Layout;
