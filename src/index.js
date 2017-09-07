import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import setAuthorizationToken from './app/utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './app/actions/authActions';
import App from './app/app';
import Login from './app/components/login/login';
import Signup from './app/components/signup/signup';
import Layout from './app/components/layout/layout';
import NotFound from './app/components/not-found/not-found';
import 'font-awesome/css/font-awesome.css';
import requireAuth from './app/utils/requireAuth';
import store from './store';
import withTracker from './app/utils/withTracker';

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={withTracker(App)}></Route>
        <Route path="/login" component={withTracker(Login)}></Route>
        <Route path="/signup" component={withTracker(Signup)}></Route>
        <Route path="/app" component={withTracker(requireAuth(Layout))}></Route>
        <Route component={withTracker(NotFound)}></Route>
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'))
