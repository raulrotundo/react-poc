import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NewOrderStepsComponent from './new-order-steps-component';

describe('NewOrderStepsComponent', () => {
  it('render NewOrderStepsComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NewOrderStepsComponent />
      </MemoryRouter>
    , div)
  });
});
