import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import HeaderComponent from './header-component';

describe('HeaderComponent', () => {
  it('render HeaderComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <HeaderComponent />
        </MemoryRouter>
      </Provider>
      , div)
  });
});
