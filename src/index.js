import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './app/app';
import Login from './app/login/login';
import Signup from './app/signup/signup';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/signup" component={Signup}></Route>
    </div>
  </Router>
), document.getElementById('root'))
registerServiceWorker();
