import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import Layout from './layout';

describe('Layout', () => {
  let props;

  beforeEach(() => {
    props = {
      match: {
        url: '/app'
      }
    };
  });

  it('render Layout without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <Layout {...props} />
        </MemoryRouter>
      </Provider>
      , div);
  });
});
