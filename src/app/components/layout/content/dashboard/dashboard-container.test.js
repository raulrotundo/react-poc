import React from 'react';
import { shallow } from 'enzyme';
import DashboardContainer from './dashboard-container';

describe('DashboardContainer Test', () => {
  it('DashboardContainer render without crashing.', () => {
    const container = shallow(<DashboardContainer />);

    expect(container.text()).toEqual('<DashboardComponent />');
  });
});