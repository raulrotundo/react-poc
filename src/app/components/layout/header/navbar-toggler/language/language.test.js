import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Language from './language';

describe('Language', () => {
  it('render Language without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Language />
      </MemoryRouter>
    , div)
  });
});
