import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import { MemoryRouter } from 'react-router-dom';
import './login.css';

describe('Login', () => {
  it('render Login without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    , div)
  });
});
