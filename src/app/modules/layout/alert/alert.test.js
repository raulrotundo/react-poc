import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Alert from './alert';

describe('Alert', () => {
  it('render Alert without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Alert type="danger" message="Test" />
      , div)
  });
});
