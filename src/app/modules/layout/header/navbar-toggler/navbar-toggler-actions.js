import * as types from 'constants/actionTypes';

export const setNavbarTogglerDropDown = (dropdownOpen) => {
  return {
    type: types.SET_NAVBAR_TOGGLER_DROPDOWN,
    dropdownOpen
  }
}
