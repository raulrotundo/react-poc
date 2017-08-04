import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import App from './app/app';
import Login from './app/login/login';
import Signup from './app/signup/signup';
import Layout from './app/layout/layout';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="/app" component={Layout}></Route>
    </div>
  </Router>
), document.getElementById('root'))
registerServiceWorker();
