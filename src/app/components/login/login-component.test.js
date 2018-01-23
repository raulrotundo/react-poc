import React from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from './login-component';
import { MemoryRouter } from 'react-router-dom';
import './login-component.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

describe('Login', () => {

  let props;

  beforeEach(() => {
    props = {
      errors: {
        msg: ''
      },
      form : {
        isLoading: false
      }
    };
  });

  it('render Login without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(
      (state = {}) => state,
      applyMiddleware(thunk)
    );

    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginComponent {...props} />
        </MemoryRouter>
      </Provider>
      , div)
  });
});
