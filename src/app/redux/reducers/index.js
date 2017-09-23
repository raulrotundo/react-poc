import { combineReducers } from 'redux';

import auth from './auth';
import newOrder from 'modules/layout/content/orders/new-order/new-order-reducers';
import sidebar from 'modules/layout/sidebar/sidebar-reducers';
import navbar from 'modules/layout/header/navbar-toggler/navbar-toggler-reducers';

export default combineReducers({
  auth,
  newOrder,
  sidebar,
  navbar
});
