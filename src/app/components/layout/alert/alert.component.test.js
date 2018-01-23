import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AlertComponent from './alert-component';

describe('AlertComponent', () => {
  it('render AlertComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AlertComponent type="danger" message="Test" />
      , div)
  });
});
