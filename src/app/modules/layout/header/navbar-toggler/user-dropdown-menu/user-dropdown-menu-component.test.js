import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import UserDropdownMenuComponent from './user-dropdown-menu-component';

describe('UserDropdownMenuComponent', () => {
  it('render UserDropdownMenuComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <UserDropdownMenuComponent />
        </MemoryRouter>
      </Provider>
      , div)
  });
});
