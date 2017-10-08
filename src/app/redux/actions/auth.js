import axios from 'axios';
import setAuthorizationToken from 'utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import * as types from 'constants/actionTypes';

axios.defaults.baseURL = process.env.REACT_APP_API_ENPOINT;

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
    return axios.post('/api/authenticate', formData).then(res => {
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