import { combineReducers } from 'redux';

import auth from './auth';
import newOrder from 'modules/layout/content/orders/new-order/new-order-reducers';

export default combineReducers({
  auth,
  newOrder
});
