import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NotificationComponent from './notification-component';

describe('NotificationComponent', () => {
  it('render NotificationComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NotificationComponent />
      </MemoryRouter>
    , div)
  });
});
