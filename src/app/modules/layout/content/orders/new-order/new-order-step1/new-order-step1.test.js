import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NewOrderStep1 from './new-order-step1';

describe('NewOrderStep1', () => {
  it('render NewOrderStep1 without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NewOrderStep1 />
      </MemoryRouter>
    , div)
  });
});
