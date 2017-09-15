import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../../components/dashboard';

it('render Dashboard page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
});
