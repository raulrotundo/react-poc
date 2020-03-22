import axios from 'axios';

class FetchWrapper {

  constructor() {
    // Set config defaults when creating the instance
    let fetch = axios.create({
      baseURL: process.env.REACT_APP_API_ENPOINT
    });
    // Add a response interceptor
    fetch.interceptors.response.use(this.handleSuccess, this.handleError);
    // Set authorization token as default
    if (localStorage.jwtToken) {
      fetch.defaults.headers.common['Authorization'] = `Bearer ${localStorage.jwtToken}`;
    }
    this.fetch = fetch;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    switch (error.response.status) {
      case 500:
        // Verify if there is an authentication error to redirect to login page
        if (typeof (error.response.data.error) !== 'undefined' && error.response.data.error.auth === false) {
          this.redirectTo(document, '/login');
        }
        break;
      default: // useless
    }
    return Promise.reject(error)
  }

  redirectTo(document, path) {
    document.location = path;
  }

  get(url, options = {}) {
    const initial = {
      method: 'get',
      url: url,
      responseType: 'json'
    }
    const config = Object.assign({}, initial, options);
    return this.fetch.request(config).then((response) => {
      return Promise.resolve(response);
    }).catch((err) => {
      return Promise.reject(err);
    });
  }

  patch(url, data) {
    return this.fetch.request({
      method: 'patch',
      url: url,
      responseType: 'json',
      data: data
    }).then((response) => {
      return Promise.resolve(response);
    }).catch((err) => {
      return Promise.reject(err);
    });
  }

  post(url, data) {
    return this.fetch.request({
      method: 'post',
      url: url,
      responseType: 'json',
      data: data
    }).then((response) => {
      return Promise.resolve(response);
    }).catch((err) => {
      return Promise.reject(err);
    });
  }

  delete(url) {
    return this.fetch.request({
      method: 'delete',
      url: url,
      responseType: 'json'
    }).then((response) => {
      return Promise.resolve(response);
    }).catch((err) => {
      return Promise.reject(err);
    });
  }
}

export default new FetchWrapper();