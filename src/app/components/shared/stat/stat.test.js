import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Stat from './stat';

describe('Stat', () => {
  it('render Stat without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Stat />
      </MemoryRouter>
    , div)
  });
});
