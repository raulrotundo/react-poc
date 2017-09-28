import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NotFoundContentComponent from './not-found-content-component';

describe('NotFoundContentComponent', () => {
  it('render NotFoundContentComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NotFoundContentComponent />
      </MemoryRouter>
    , div)
  });
});
