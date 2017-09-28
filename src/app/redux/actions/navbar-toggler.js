import * as types from 'constants/actionTypes';

export const setNavbarTogglerDropDown = (activeNavbarToggler) => {
  return {
    type: types.SET_NAVBAR_TOGGLER_DROPDOWN,
    activeNavbarToggler
  }
}
