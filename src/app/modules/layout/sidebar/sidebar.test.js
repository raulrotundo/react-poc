import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './sidebar';

describe('Sidebar', () => {
  it('render sidebar without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    , div)
  });
});
