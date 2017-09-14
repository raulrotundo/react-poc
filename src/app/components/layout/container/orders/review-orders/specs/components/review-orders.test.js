import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ReviewOrders from '../../components/review-orders';

describe('ReviewOrders', () => {
  it('render ReviewOrders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <ReviewOrders />
      </MemoryRouter>
    , div)
  });
});
