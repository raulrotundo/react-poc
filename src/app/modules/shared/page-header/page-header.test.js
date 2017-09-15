import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import PageHeader from './page-header';

describe('PageHeader', () => {
  it('render PageHeader without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <PageHeader />
      </MemoryRouter>
    , div)
  });
});
