import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import PageHeaderComponent from './page-header-component';

describe('PageHeaderComponent', () => {
  it('render PageHeaderComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <PageHeaderComponent />
      </MemoryRouter>
    , div)
  });
});
