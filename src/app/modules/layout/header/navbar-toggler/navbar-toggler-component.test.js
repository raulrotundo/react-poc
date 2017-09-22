import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import NavBarTogglerComponent from './navbar-toggler-component';

describe('NavBarTogglerComponent', () => {
  it('render NavBarTogglerComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <NavBarTogglerComponent />
        </MemoryRouter>
      </Provider>
      , div)
  });
});
