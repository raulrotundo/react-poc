import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ReviewOrdersComponent from './review-orders-component';

describe('ReviewOrdersComponent', () => {
  it('render ReviewOrdersComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <ReviewOrdersComponent />
      </MemoryRouter>
    , div)
  });
});
