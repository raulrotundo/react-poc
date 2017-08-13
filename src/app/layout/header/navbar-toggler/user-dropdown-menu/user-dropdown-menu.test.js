import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import UserDropdownMenu from './user-dropdown-menu';

describe('UserDropdownMenu', () => {
  it('render UserDropdownMenu without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <UserDropdownMenu />
      </MemoryRouter>
    , div)
  });
});
