import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import LoginContainer from './login-container';

describe('LoginContainer Test', () => {
  let props = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    form: {},
    errors: {}
  };

  it('should render LoginContainer without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginContainer {...props} />
        </MemoryRouter>
      </Provider>
      , div
    );
  });
});

