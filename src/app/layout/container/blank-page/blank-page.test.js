import React from 'react';
import ReactDOM from 'react-dom';
import BlankPage from './blank-page';

it('render BlankPage page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlankPage />, div);
});
