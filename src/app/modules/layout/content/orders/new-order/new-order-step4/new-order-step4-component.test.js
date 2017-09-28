import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NewOrderStep2Component from './new-order-step2-component';

describe('NewOrderStep2Component', () => {
  it('render NewOrderStep2Component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NewOrderStep2Component />
      </MemoryRouter>
    , div)
  });
});
