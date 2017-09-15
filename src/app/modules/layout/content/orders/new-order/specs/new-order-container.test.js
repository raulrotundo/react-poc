import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NewOrderContainer from '../new-order-container';

describe('NewOrderContainer', () => {
  it('render NewOrderContainer without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NewOrderContainer />
      </MemoryRouter>
    , div)
  });
});
