import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Header from './header';

describe('Header', () => {
  it('render Header without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    , div)
  });
});
