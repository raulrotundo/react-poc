import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NewOrderStep3Component from './new-order-step3-component';

describe('NewOrderStep3Component', () => {
  it('render NewOrderStep3Component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NewOrderStep3Component />
      </MemoryRouter>
    , div)
  });
});
