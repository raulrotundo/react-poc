import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NavBarToggler from './navbar-toggler';

describe('NavBarToggler', () => {
  it('render NavBarToggler without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NavBarToggler />
      </MemoryRouter>
    , div)
  });
});
