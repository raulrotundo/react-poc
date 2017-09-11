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

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function userLoginRequest(data) {
  return dispatch => {
    return axios.post('/api/authenticate', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}