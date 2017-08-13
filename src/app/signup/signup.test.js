import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './signup';
import { MemoryRouter } from 'react-router-dom';
import './signup.css';

describe('Signup', () => {
  it('render Signup without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    , div)
  });
});
