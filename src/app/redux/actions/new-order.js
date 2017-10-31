import * as types from 'constants/actionTypes';
import fetch from 'services/fetch-wrapper';

export const setNewOrderStep = (orderStep) => {
  return {
    type: types.SET_NEW_ORDER_STEP,
    orderStep
  }
}

export function setTypeaheadCustomers(customers) {
  return {
    type: types.SET_TYPEAHEAD_CUSTOMERS,
    customers
  }
}

export function handleTypeaheadCustomerSearch(query) {
  return dispatch => {
    return fetch.get('/api/customers?q=' + query).then(res => {
      dispatch(setTypeaheadCustomers(res.data.data));
    }).catch((err) => {
      dispatch(setTypeaheadCustomers([]));
    });
  }
}
