import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './signup';
import './signup.css';

it('render Login without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Signup />, div);
});
