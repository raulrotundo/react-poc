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

export function typeaheadCustomerInputIsLoading(isLoading) {
  return {
    type: types.TYPEAHEAD_CUSTOMERS_INPUT_ISLOADING,
    isLoading
  }
}

export function customerSearch(query) {
  return dispatch => {
    dispatch(typeaheadCustomerInputIsLoading(true));
    return fetch.get('/api/customers?q=' + query).then(res => {
      dispatch(setTypeaheadCustomers(res.data.data));
      dispatch(typeaheadCustomerInputIsLoading(false));
    }).catch((err) => {
      dispatch(setTypeaheadCustomers([]));
      dispatch(typeaheadCustomerInputIsLoading(false));
    });
  }
}

export function handleTypeaheadCustomerInputChange(value) {
  return {
    type: types.SET_TYPEAHEAD_CUSTOMERS_INPUT_VALUE,
    value
  }
}
