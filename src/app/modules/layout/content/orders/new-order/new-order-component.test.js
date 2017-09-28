import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NewOrderComponent from './new-order-component';

describe('NewOrderComponent', () => {
  let props;

  beforeEach(() => {
    props = {
      match: {
        url: '/app'
      }
    };
  });

  it('render NewOrderComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NewOrderComponent {...props} />
      </MemoryRouter>
      , div)
  });
});
