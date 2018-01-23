import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import NotFoundComponent from './not-found-component';
import './not-found-component.css';

describe('NotFound', () => {
  it('render NotFoundComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <NotFoundComponent />
        </MemoryRouter>
      </Provider>
      , div);
  });
});
