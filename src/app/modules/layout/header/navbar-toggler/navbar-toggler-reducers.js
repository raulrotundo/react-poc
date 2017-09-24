import * as types from 'constants/actionTypes';

const initialState = {
  toggler: {
    activeNavbarToggler: ''
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_NAVBAR_TOGGLER_DROPDOWN:
      return {
        toggler: {
          activeNavbarToggler: action.activeNavbarToggler
        }
      };
    default: return state;
  }
}
