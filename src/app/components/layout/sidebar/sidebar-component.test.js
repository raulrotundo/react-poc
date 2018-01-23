import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import SidebarComponent from './sidebar-component';

describe('SidebarComponent', () => {
  it('render SidebarComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <SidebarComponent />
      </MemoryRouter>
    , div)
  });
});
