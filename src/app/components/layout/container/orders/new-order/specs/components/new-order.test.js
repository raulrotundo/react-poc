import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NewOrder from '../../components/new-order';

describe('NewOrder', () => {
  it('render NewOrder without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NewOrder />
      </MemoryRouter>
    , div)
  });
});
