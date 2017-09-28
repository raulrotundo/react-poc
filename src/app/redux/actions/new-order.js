import * as types from 'constants/actionTypes';

export const setNewOrderStep = (orderStep) => {
  return {
    type: types.SET_NEW_ORDER_STEP,
    orderStep
  }
}
