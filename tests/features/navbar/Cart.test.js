import React from 'react';
import { shallow } from 'enzyme';
import { Cart } from '../../../src/features/navbar';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Cart />);
  expect(renderedComponent.find('.navbar-cart').length).toBe(1);
});
