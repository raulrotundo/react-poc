import * as types from 'constants/actionTypes';

const initialState = {
  form: {
    orderStep: 1
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_NEW_ORDER_STEP:
      return {
        form: {
          orderStep: action.orderStep
        }
      };
    default: return state;
  }
}
