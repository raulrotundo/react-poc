import React from 'react';
import ReactDOM from 'react-dom';
import ReviewOrders from './review-orders';

it('render ReviewOrders page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReviewOrders />, div);
});
