import React from 'react';
import ReactDOM from 'react-dom';
import DashboardComponent from './dashboard-component';

it('render DashboardComponent page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DashboardComponent />, div);
});
