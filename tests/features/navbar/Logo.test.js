import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from '../../../src/features/navbar';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Logo />);
  expect(renderedComponent.find('.navbar-logo').length).toBe(1);
});
