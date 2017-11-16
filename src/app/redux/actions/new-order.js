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

export function setProductList(data) {
  return {
    type: types.SET_PRODUCTS_LIST,
    data
  }
}

export function isProductListLoading(isProductListLoading) {
  return {
    type: types.IS_PRODUCT_LIST_LOADING,
    isProductListLoading
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

export function isBillingAddressInputsVisible(isVisible) {
  return {
    type: types.SET_BILLING_ADDRESS_INPUTS_VISIBILITY,
    isVisible
  }
}

export function getProducts() {
  return dispatch => {
    dispatch(isProductListLoading(true));
    return fetch.get('/api/products').then(res => {
      dispatch(isProductListLoading(false));
      dispatch(setProductList(res.data));
    }).catch((err) => {
      dispatch(isProductListLoading(false));
      dispatch(setProductList([]));
    });
  }
}

export function addToCart(productId) {
  return {
    type: types.ADD_TO_CART,
    productId
  }
}

export function removeToCart(productId) {
  return {
    type: types.REMOVE_TO_CART,
    productId
  }
}
