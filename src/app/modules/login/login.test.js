import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import { MemoryRouter } from 'react-router-dom';
import './login.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

describe('Login', () => {
  it('render Login without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(
      (state = {}) => state,
      applyMiddleware(thunk)
    );

    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
      , div)
  });
});
