import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import StatComponent from './stat-component';

describe('StatComponent', () => {
  it('render StatComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <StatComponent />
      </MemoryRouter>
    , div)
  });
});
