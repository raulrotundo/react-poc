import * as types from 'constants/actionTypes';

export const setExpandClass = (activeMenu) => {
  return {
    type: types.SET_EXPAND_CLASS,
    activeMenu
  }
}
