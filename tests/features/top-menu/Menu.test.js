import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from '../../../src/features/top-menu';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Menu />);
  expect(renderedComponent.find('.top-menu-menu').length).toBe(1);
});
