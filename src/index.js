import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './app/app';
import Login from './app/components/login/login';
import Signup from './app/components/signup/signup';
import Layout from './app/components/layout/layout';
import NotFound from './app/components/not-found/not-found';
import 'font-awesome/css/font-awesome.css';

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/app" component={Layout}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'))
