import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import UserDropdownMenuComponent from './user-dropdown-menu-component';

describe('UserDropdownMenuComponent', () => {

  let props;

  beforeEach(() => {
    props = {
      auth: {
        isAuthenticated: false,
        user: {
          name: "Test Name"
        }
      }
    };
  });

  it('render UserDropdownMenuComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <UserDropdownMenuComponent {...props} />
        </MemoryRouter>
      </Provider>
      , div)
  });
});
