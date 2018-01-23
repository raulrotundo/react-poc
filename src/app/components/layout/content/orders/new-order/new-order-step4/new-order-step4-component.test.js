import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NewOrderStep4Component from './new-order-step4-component';

describe('NewOrderStep4Component', () => {
  it('render NewOrderStep4Component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NewOrderStep4Component />
      </MemoryRouter>
    , div)
  });
});
