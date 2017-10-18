import * as types from 'constants/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: {},
  form: {
    username: '',
    password: '',
    isLoading: false
  },
  errors: {
    msg: ''
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return Object.assign({}, state, {
        isAuthenticated: Object.keys(action.user).length === 0 ? false : true,
        user: action.user,
        form: {
          isLoading: false
        }
      });
    case types.STARTING_LOGIN_CALL:
      return Object.assign({}, state, {
        form: action.form,
        errors: {
          msg: ''
        }
      });
    case types.SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        errors: action.error,
        form: action.form
      });
    case types.HANDLE_INPUT_CHANGE:
      return Object.assign({}, state, {
        form: action.form
      });
    default: return state;
  }
}
