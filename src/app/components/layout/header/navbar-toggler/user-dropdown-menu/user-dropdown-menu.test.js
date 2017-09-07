import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../../../../store';
import UserDropdownMenu from './user-dropdown-menu';

describe('UserDropdownMenu', () => {
  it('render UserDropdownMenu without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <UserDropdownMenu />
        </MemoryRouter>
      </Provider>
      , div)
  });
});
