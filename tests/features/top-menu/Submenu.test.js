import React from 'react';
import { shallow } from 'enzyme';
import { Submenu } from '../../../src/features/top-menu';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Submenu />);
  expect(renderedComponent.find('.top-menu-submenu').length).toBe(1);
});
