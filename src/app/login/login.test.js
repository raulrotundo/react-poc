import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import './login.css';

it('render Login without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
});
