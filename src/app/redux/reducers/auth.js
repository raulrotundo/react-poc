import * as types from '../../constants/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        isAuthenticated: Object.keys(action.user).length === 0 ? false : true,
        user: action.user
      };
    default: return state;
  }
}
