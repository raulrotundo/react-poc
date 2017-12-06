import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from './home-container';

describe('HomeContainer Test', () => {
  it('HomeContainer render without crashing.', () => {
    const container = shallow(<HomeContainer />);

    expect(container.text()).toEqual('<HomeComponent />');
  });
});