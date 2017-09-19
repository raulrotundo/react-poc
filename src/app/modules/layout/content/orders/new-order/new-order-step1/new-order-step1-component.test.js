import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NewOrderStep1Component from './new-order-step1-component';

describe('NewOrderStep1Component', () => {
  it('render NewOrderStep1Component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NewOrderStep1Component />
      </MemoryRouter>
    , div)
  });
});
