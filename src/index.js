import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import App from './app/app';
import Login from './app/login/login';
import Signup from './app/signup/signup';
import Layout from './app/layout/layout';
import NotFound from './app/not-found/not-found';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="/app" component={Layout}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </Router>
), document.getElementById('root'))
registerServiceWorker();
