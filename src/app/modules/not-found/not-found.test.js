import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './not-found';
import './not-found.css';

it('render Not Found page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotFound />, div);
});
