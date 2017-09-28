import { combineReducers } from 'redux';

import auth from './auth';
import newOrder from './new-order';
import sidebar from './sidebar';
import navbar from './navbar-toggler';

export default combineReducers({
  auth,
  newOrder,
  sidebar,
  navbar
});
