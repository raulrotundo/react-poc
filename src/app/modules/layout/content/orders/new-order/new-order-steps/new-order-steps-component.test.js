import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NewOrderSteps from './new-order-steps';

describe('NewOrderSteps', () => {
  it('render NewOrderSteps without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NewOrderSteps />
      </MemoryRouter>
    , div)
  });
});
