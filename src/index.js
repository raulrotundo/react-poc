import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
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

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render((
  <Provider store={store}>
    <Router onUpdate={logPageView}>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/app" component={requireAuth(Layout)}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'))
