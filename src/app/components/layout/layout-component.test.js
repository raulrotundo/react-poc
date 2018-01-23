import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import LayoutComponent from './layout-component';

describe('Layout', () => {
  let props;

  beforeEach(() => {
    props = {
      match: {
        url: '/app'
      }
    };
  });

  it('render LayoutComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <LayoutComponent {...props} />
        </MemoryRouter>
      </Provider>
      , div);
  });
});
