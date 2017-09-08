import React from 'react';
import ReactDOM from 'react-dom';
import NewOrder from './new-order';

it('render NewOrder page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewOrder />, div);
});
