import React from 'react';
import { shallow } from 'enzyme';
import { MainNavbar } from '../../../src/features/navbar';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<MainNavbar />);
  expect(renderedComponent.find('.navbar-main').length).toBe(1);
});
