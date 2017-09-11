import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../../redux/store';
import NavBarToggler from './navbar-toggler';

describe('NavBarToggler', () => {
  it('render NavBarToggler without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <NavBarToggler />
        </MemoryRouter>
      </Provider>
      , div)
  });
});
