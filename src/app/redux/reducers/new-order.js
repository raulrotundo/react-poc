import * as types from 'constants/actionTypes';

const initialState = {
  form: {
    orderStep: 1,
    step1: {
      inputTypeahead: {
        allowNew: false,
        multiple: false,
        options: []
      }
    }
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_NEW_ORDER_STEP:
      return {...state,
        form: {
          orderStep: action.orderStep,
          step1: state.form.step1
        }
      };
    default: return state;
  }
}
