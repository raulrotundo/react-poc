import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Message from './message';

describe('Message', () => {
  it('render Message without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Message />
      </MemoryRouter>
    , div)
  });
});
