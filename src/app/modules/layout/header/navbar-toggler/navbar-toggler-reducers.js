import * as types from 'constants/actionTypes';

const initialState = {
  toggler: {
    dropdownOpen: false
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_NAVBAR_TOGGLER_DROPDOWN:
      return {
        toggler: {
          dropdownOpen: action.dropdownOpen
        }
      };
    default: return state;
  }
}
