import fetch from 'services/fetch-wrapper';
import setAuthorizationToken from 'utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import * as types from 'constants/actionTypes';

export function setCurrentUser(user) {
  return {
    type: types.SET_CURRENT_USER,
    user
  };
}

export function setLoginError(form, error) {
  Object.assign(form, { isLoading: false });
  return {
    type: types.SET_LOGIN_ERROR,
    error,
    form
  }
}

export function startingLoginCall(form, isLoading) {
  Object.assign(form, { isLoading: true });
  return {
    type: types.STARTING_LOGIN_CALL,
    form
  }
}

export function handleInputChange(form) {
  return {
    type: types.HANDLE_INPUT_CHANGE,
    form
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function userLoginRequest(formData) {
  return dispatch => {
    dispatch(startingLoginCall(formData));
    return fetch.post('/api/authenticate', formData).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    }).catch((err) => {
      if (!err.response) {
        dispatch(setLoginError(formData, { msg: 'Network Error' }));
      } else {
        dispatch(setLoginError(formData, err.response.data.errors));
      }
    });
  }
}

export function checkTokenExpiration() {
  return dispatch => {
    if (localStorage.jwtToken) {
      const jwt = jwtDecode(localStorage.jwtToken);
      const current_time = new Date().getTime() / 1000;
      if (jwt.exp) {
        if (current_time > jwt.exp) {
          return Promise.resolve(false);
        } else {
          return Promise.resolve(true);
        }
      } else {
        return Promise.resolve(false);
      }
    } else if (!localStorage.jwtToken) {
      return Promise.resolve(false);
    } else {
      return Promise.resolve(true);
    }
  }
}
