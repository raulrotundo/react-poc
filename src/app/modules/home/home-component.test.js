import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import HomeComponent from './home-component';

it('render HomeComponent without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <HomeComponent />
    </MemoryRouter>
    , div);
});
