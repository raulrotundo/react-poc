import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './layout.css';

it('render Layout page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout />, div);
});
