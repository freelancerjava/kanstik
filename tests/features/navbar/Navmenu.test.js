import React from 'react';
import { shallow } from 'enzyme';
import { Navmenu } from '../../../src/features/navbar';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Navmenu />);
  expect(renderedComponent.find('.navbar-navmenu').length).toBe(1);
});
