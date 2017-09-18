import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NewOrderContainer from '../new-order-container';
import { Provider } from 'react-redux';
import store from 'redux/store';

describe('NewOrderContainer', () => {
  it('render NewOrderContainer without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <NewOrderContainer />
        </MemoryRouter>
      </Provider>
      , div)
  });
});
