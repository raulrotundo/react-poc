import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import MessageComponent from './message-component';

describe('MessageComponent', () => {
  it('render MessageComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <MessageComponent />
      </MemoryRouter>
    , div)
  });
});
