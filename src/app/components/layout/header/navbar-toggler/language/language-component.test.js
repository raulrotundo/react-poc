import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import LanguageComponent from './language-component';

describe('LanguageComponent', () => {
  it('render LanguageComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <LanguageComponent />
      </MemoryRouter>
    , div)
  });
});
