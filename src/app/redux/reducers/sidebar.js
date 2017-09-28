import * as types from 'constants/actionTypes';

const initialState = {
  sidebar: {
    activeMenu: ''
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_EXPAND_CLASS:
      return {
        sidebar: {
          activeMenu: action.activeMenu
        }
      };
    default: return state;
  }
}
