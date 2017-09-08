import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import NewOrder from './container/orders/new-order/new-order';
import Dashboard from './container/dashboard/dashboard';
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
            <Route exact path={this.match.url} component={Dashboard} />
            <Route exact path={`${this.match.url}/orders/new-order`} component={NewOrder} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default Layout;
