import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from './home-component';

describe('HomeComponent Test', () => {
  it('render HomeComponent without crashing', () => {
    shallow(<HomeComponent />)
  });

  it('render welcome message', () => {
    const wrapper = shallow(<HomeComponent />);
    const welcome = <h2>Welcome to React App POC</h2>;

    expect(wrapper.contains(welcome)).toEqual(true);
  });
});
